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
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ResourcesService } from '../protos/resource';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateTaskColumnRequest,
  TasksService,
  ListTaskColumnsRequest,
  UpdateTaskColumnRequest,
  TaskColumnResponse,
} from '../protos/task';
import { Observable, catchError, from, map, take } from 'rxjs';

@Controller({
  version: '1',
  path: 'tasks-group',
})
export class TaskGroupController implements OnModuleInit {
  private readonly logger = new Logger(TaskGroupController.name);
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
  public async listTaskGroup(
    @Query() findAllTaskGroupDto?: ListTaskColumnsRequest,
  ): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.taskService.ListTaskColumns({
          ...findAllTaskGroupDto,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((taskGroupResult) => {
          Logger.log('taskGroupResult data:');
          Logger.log(taskGroupResult);
          if (taskGroupResult && taskGroupResult.length > 0) {
            const taskIdArr = taskGroupResult
              ? taskGroupResult?.flatMap((taskColumn) =>
                  taskColumn?.task?.map((item) => +item.id),
                )
              : [];

            Logger.log('taskIdArr data:');
            Logger.log(taskIdArr);

            return new Promise((resourcesServiceResolve) => {
              from(
                this.resourcesService.ListResources({
                  taskId: taskIdArr?.filter((e) => e != null),
                }),
              )
                .pipe(map((result) => result?.data?.data))
                .subscribe((resourceResult) => {
                  Logger.log('resourceResult data:');
                  Logger.log(resourceResult);

                  const resourceAllocations = resourceResult?.reduce(
                    (acc, resource) => {
                      if (resource.resourceAllocation) {
                        return acc.concat(resource.resourceAllocation);
                      } else {
                        return acc;
                      }
                    },
                    [],
                  );
                  Logger.log('resourceAllocations');
                  Logger.log(resourceAllocations);
                  const response = taskGroupResult?.map((taskColumn) => ({
                    ...taskColumn,
                    task:
                      taskColumn?.task?.map((task) => ({
                        ...task,
                        resources:
                          resourceAllocations?.filter(
                            (resourceAllocationItem) =>
                              resourceAllocationItem.taskId === task.id,
                          ) || [],
                      })) || [],
                  }));
                  resourcesServiceResolve(taskGroupResult);
                  resolve(response);
                });
            });
          } else {
            resolve(taskGroupResult);
          }
        });
    });
  }

  @Post()
  public async create(@Body() createTaskGroupDto: CreateTaskColumnRequest) {
    return new Promise((resolve, reject) => {
      from(
        this.taskService.CreateTaskColumn({
          ...createTaskGroupDto,
        }),
      )
        .pipe(
          take(1),
          catchError((error: Error, caught: Observable<TaskColumnResponse>) => {
            throw error;
          }),
        )
        .pipe(map((result) => result?.data?.data))
        .subscribe({
          next: (taskColumnResult) => {
            resolve(
              taskColumnResult instanceof Array && taskColumnResult.length > 0
                ? taskColumnResult[0]
                : taskColumnResult,
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
    @Body() updateTaskColumnDto: UpdateTaskColumnRequest,
  ) {
    const { id: taskId, ...data } = updateTaskColumnDto;

    return new Promise((resolve) => {
      from(
        this.taskService.UpdateTaskColumn({
          ...data,
          id: +id,
        }),
      )
        .pipe(take(1))
        .pipe(map((result) => result?.data?.data))
        .subscribe((taskResult) => {
          resolve(taskResult.length > 0 ? taskResult[0] : taskResult || []);
        });
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: number) {
    return new Promise((resolve) => {
      from(
        this.taskService.DeleteTaskColumn({
          id: +id,
        }),
      ).subscribe((deleteTaskColumnResult) => {
        resolve(deleteTaskColumnResult);
      });
    });
  }
}
