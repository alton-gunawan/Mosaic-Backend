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
  RemoveTaskColumnRequest,
  TasksService,
  UpdateTaskColumnRequest,
  UpdateTaskRequest,
} from '../protos/task';

@Controller({
  version: '1',
  path: 'tasks',
})
export class TasksController implements OnModuleInit {
  private readonly logger = new Logger(TasksController.name);
  private taskService: TasksService;

  constructor(
    @Inject('TASK_PACKAGE')
    private readonly taskPackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.taskService = this.taskPackageClient.getService('TasksService');
  }

  @Get()
  public async listTask(
    @Query() findAllTaskDto?: FindAllTasksRequest,
  ): Promise<any> {
    return await this.taskService.FindAllTasks({
      ...findAllTaskDto,
    });
  }

  @Post()
  public async create(@Body() createTaskDto: CreateTaskRequest): Promise<any> {
    return await this.taskService.CreateTask({
      ...createTaskDto,
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskRequest,
  ) {
    return await this.taskService.UpdateTask({
      ...updateTaskDto,
      id: id,
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
