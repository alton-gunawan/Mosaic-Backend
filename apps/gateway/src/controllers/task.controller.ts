import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateTaskRequest,
  TasksService,
  UpdateTaskRequest,
  ListTasksRequest,
  TaskResponse,
} from '../protos/task';
import { ResourcesService } from '../protos/resource';
import { Observable, catchError, from, map, take } from 'rxjs';
import { Timestamp } from '../protos/google/protobuf/timestamp';
import { Duration } from '../protos/google/protobuf/duration';
import { AssignTaskDto } from '../dto/tasks/assign-task.dto';

@Controller({
  version: '1',
  path: 'tasks',
})
export class TasksController implements OnModuleInit {
  private readonly logger = new Logger(TasksController.name);
  private taskService: TasksService;
  private resourcesService: ResourcesService;

  constructor(
    @Inject('TASK_PACKAGE')
    private readonly taskPackageClient: ClientGrpc,
    @Inject('RESOURCE_PACKAGE')
    private readonly resourcePackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.taskService = this.taskPackageClient.getService('TasksService');
    this.resourcesService =
      this.resourcePackageClient.getService('ResourcesService');
  }

  @Get()
  public async listTask(
    @Query() listTasksDto?: ListTasksRequest,
  ): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.taskService.ListTasks({
          ...listTasksDto,
        }),
      )
        .pipe(
          map((result) =>
            result?.data?.data.map((task) => ({
              ...task,
              startDate:
                (task?.startDate as any)?.seconds?.low !== 0
                  ? new Date((task?.startDate as any)?.seconds?.low * 1000)
                  : undefined,
              duration:
                (task?.duration as any)?.seconds?.low !== 0
                  ? Math.abs((task?.duration as any)?.seconds.low ?? 0) /
                    (60 * 60 * 24)
                  : undefined,
              taskDuration: task.duration,
            })),
          ),
        )
        .subscribe((taskResult) => {
          Logger.log('List Task Result:');
          Logger.log(JSON.stringify(taskResult));

          // resolve([]);
          resolve(taskResult);
        });
    });
  }

  @Post()
  public async create(@Body() createTaskDto: CreateTaskRequest): Promise<any> {
    const { startDate, duration, ...data } = createTaskDto;

    const formattedDuration = createTaskDto?.duration
      ? Duration.create({
          seconds: createTaskDto?.duration?.seconds || 0,
          nanos: createTaskDto?.duration?.nanos || 0,
        }) || undefined
      : undefined;

    const formattedStartDate = createTaskDto?.startDate
      ? Timestamp.create({
          seconds: Math.floor(
            new Date(createTaskDto?.startDate).getTime() / 1000,
          ),
          nanos: (new Date(createTaskDto?.startDate).getTime() % 1000) * 1e6,
        }) || undefined
      : undefined;

    return new Promise((resolve, reject) => {
      from(
        this.taskService.CreateTask({
          ...data,
          duration: formattedDuration || undefined,
          startDate: (formattedStartDate as any) || undefined,
        }),
      )
        .pipe(
          take(1),
          catchError((error: Error, caught: Observable<TaskResponse>) => {
            throw error;
          }),
        )
        .pipe(map((result) => result?.data?.data))
        .subscribe({
          next: (taskResult) => {
            resolve(
              taskResult instanceof Array && taskResult.length > 0
                ? taskResult[0]
                : taskResult,
            );
          },
          error: (error) => {
            reject(error);
          },
        });
    }).catch((error) => {
      throw new HttpException(
        error.message || 'Error creating task...',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskRequest,
  ) {
    Logger.log('updateTaskDto:put()');
    Logger.log(JSON.stringify(updateTaskDto));

    const { id: taskId, startDate, ...data } = updateTaskDto;

    const dtoKeys = Object.keys(updateTaskDto).filter(
      (value) => value !== 'id',
    );

    const formattedStartDate =
      (Timestamp.create({
        seconds: Math.floor(new Date(startDate).getTime() / 1000),
        nanos: (new Date(startDate).getTime() % 1000) * 1e6,
      }) as any) || undefined;

    const updateTaskParams = {
      ...data,
      ...(typeof startDate !== 'undefined'
        ? { startDate: formattedStartDate }
        : {}),
      assignedTo: (updateTaskDto as any)?.assignees,
      id: +id,
    };

    return new Promise((resolve) => {
      from(this.taskService.UpdateTask(updateTaskParams as any))
        .pipe(take(1))
        .pipe(map((result) => result?.data?.data))
        .subscribe({
          next: (taskResult) => {
            const filteredTaskResult =
              Object.fromEntries(
                Object.entries(taskResult[0]).filter(([key]) =>
                  dtoKeys.includes(key),
                ),
              ) || [];

            resolve(filteredTaskResult || []);
          },
          error: (err) => {
            resolve(err);
          },
        });
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.taskService.DeleteTask({
          id: +id,
        }),
      ).subscribe((deleteTaskResult) => {
        resolve(deleteTaskResult);
      });
    });
  }

  @Patch(':id/assign')
  public async assignTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() assignTaskDto: AssignTaskDto,
  ) {
    return new Promise((resolve) => {
      from(
        this.taskService.AssignTask({
          taskId: id,
          userId: assignTaskDto.userId,
        }),
      ).subscribe((assignTaskResult) => {
        resolve(assignTaskResult);
      });
    });
  }

  @Patch(':id/remove-assignee')
  public async removeAssignee(@Param('id', ParseIntPipe) id: number) {
    return new Promise((resolve) => {
      from(
        this.taskService.RemoveAssignee({
          taskAssigneeId: id,
        }),
      ).subscribe((removeAssigneeResult) => {
        resolve(removeAssigneeResult);
      });
    });
  }
}
