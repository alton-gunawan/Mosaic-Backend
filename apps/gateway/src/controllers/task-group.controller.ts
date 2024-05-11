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
import { UpdateResourceGroupRequest } from '../protos/resource';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateTaskColumnRequest,
  FindAllTaskColumnRequest,
  TasksService,
} from '../protos/task';

@Controller({
  version: '1',
  path: 'tasks-group',
})
export class TaskGroupController implements OnModuleInit {
  private readonly logger = new Logger(TaskGroupController.name);
  private tasksService: TasksService;

  constructor(
    @Inject('TASK_PACKAGE')
    private readonly resourcePackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.tasksService = this.resourcePackageClient.getService('TasksService');
  }

  @Get()
  public async listResource(
    @Query() findAllTaskGroupDto?: FindAllTaskColumnRequest,
  ): Promise<any> {
    return await this.tasksService.FindAllTaskColumn({
      ...findAllTaskGroupDto,
    });
  }

  @Post()
  public async create(@Body() createTaskGroupDto: CreateTaskColumnRequest) {
    return await this.tasksService.CreateTaskColumn({
      ...createTaskGroupDto,
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateResourceGroupDto: UpdateResourceGroupRequest,
  ) {
    return await this.tasksService.UpdateTaskColumn({
      ...updateResourceGroupDto,
      id: String(id),
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.tasksService.RemoveTaskColumn({
      id: id,
    });
  }
}
