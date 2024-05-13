import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateTaskColumnRequest,
  CreateTaskRequest,
  FindAllTaskColumnRequest,
  FindAllTasksRequest,
  TasksService,
  UpdateTaskColumnRequest,
  UpdateTaskRequest,
} from '../protos/task';
import { ResourcesService } from '../protos/resource';
import { combineLatest, concat, firstValueFrom, from, map } from 'rxjs';

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
    @Query() findAllTaskDto?: FindAllTasksRequest,
  ): Promise<any> {
    const response = await this.taskService.FindAllTasks({
      ...findAllTaskDto,
    });

    return response;
  }

  @Post()
  public async create(@Body() createTaskDto: CreateTaskRequest): Promise<any> {
    const taskResponse = from(
      this.taskService.CreateTask({
        ...createTaskDto,
      }),
    );

    const resourceResponse = from(
      this.resourcesService.CreateResource({
        name: 'Resource 620',
        projectId: '1',
        resourceGroupId: '1',
        unit: 3,
      }),
    );

    const result$ = concat(taskResponse, resourceResponse);

    return result$.subscribe({
      next(value) {
        Logger.log('value');
        Logger.log(value);
        return value;
      },
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskRequest,
  ) {
    const taskResponse$ = from(
      this.taskService.UpdateTask({
        ...updateTaskDto,
        id: String(id),
      }),
    );

    const resourceResponse$ = from(updateTaskDto.resources).pipe(
      map((resource) =>
        from(
          this.resourcesService.AssignResource({
            resourceId: resource.id,
            taskId: id,
            unit: resource.unit,
          }),
        ),
      ),
    );

    const result$ = concat(taskResponse$, resourceResponse$);

    const combinedResponse$ = combineLatest(taskResponse$, resourceResponse$);

    return firstValueFrom(combinedResponse$).then(
      ([taskData, resourcesData]) => ({
        ...taskData,
        resources: resourcesData,
      }),
    );

    return result$.subscribe({
      next(value) {
        Logger.log('value');
        Logger.log(value);
        value;
      },
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<any> {
    return await this.taskService.DeleteTask({
      id: id,
    });
  }

  @Get('column')
  public async listTaskColumn(
    @Query() findAllTaskColumnDto?: FindAllTaskColumnRequest,
  ): Promise<any> {
    return await this.taskService.FindAllTaskColumn({
      projectId: +findAllTaskColumnDto.projectId,
    });
  }

  @Post('column')
  public async createTaskColumn(
    @Body() createTaskColumnDto: CreateTaskColumnRequest,
  ): Promise<any> {
    return await this.taskService.CreateTaskColumn({
      ...createTaskColumnDto,
    });
  }

  @Put('column/:id')
  public async updateTaskColumn(
    @Param('id') id: string,
    @Body() updateTaskColumnDto: UpdateTaskColumnRequest,
  ): Promise<any> {
    return await this.taskService.UpdateTaskColumn({
      ...updateTaskColumnDto,
      id: id,
    });
  }

  @Delete('column/:id')
  public async removeTaskColumn(@Param('id') id: string): Promise<any> {
    return await this.taskService.RemoveTaskColumn({
      id: id,
    });
  }
}
