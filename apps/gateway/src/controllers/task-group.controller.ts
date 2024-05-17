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
import {
  ResourcesService,
  UpdateResourceGroupRequest,
} from '../protos/resource';
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
  private resourcesService: ResourcesService;

  constructor(
    @Inject('TASK_PACKAGE')
    private readonly taskPackageClient: ClientGrpc,
    @Inject('RESOURCE_PACKAGE')
    private readonly resourcePackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.tasksService = this.taskPackageClient.getService('TasksService');
    this.resourcesService =
      this.resourcePackageClient.getService('ResourcesService');
  }

  @Get()
  public async listTaskGroup(
    @Query() findAllTaskGroupDto?: FindAllTaskColumnRequest,
  ): Promise<any> {
    return new Promise((resolve) => {
      this.tasksService
        .FindAllTaskColumn({
          ...findAllTaskGroupDto,
        })
        .subscribe((taskGroupResult) => {
          if (taskGroupResult.data && taskGroupResult.data.length > 0) {
            const taskIdArr = taskGroupResult?.data
              ? taskGroupResult?.data?.flatMap((taskColumn) =>
                  taskColumn?.task?.map((item) => +item.id),
                )
              : [];

            return new Promise((resourcesServiceResolve) => {
              this.resourcesService
                .FindAllResources({
                  taskId: taskIdArr.filter((e) => e != null),
                })
                .subscribe((resourceResult) => {
                  const resourceAllocations = resourceResult?.data?.reduce(
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

                  const response = taskGroupResult?.data?.map((taskColumn) => ({
                    ...taskColumn,
                    task:
                      taskColumn?.task?.map((task) => ({
                        ...task,
                        resources:
                          resourceAllocations.filter(
                            (resourceAllocationItem) =>
                              resourceAllocationItem.taskId === task.id,
                          ) || [],
                      })) || [],
                  }));

                  resourcesServiceResolve(taskGroupResult);
                  resolve({
                    ...taskGroupResult,
                    data: response,
                  });
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
    return await this.tasksService.CreateTaskColumn({
      ...createTaskGroupDto,
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateResourceGroupDto: UpdateResourceGroupRequest,
  ) {
    return await this.tasksService.UpdateTaskColumn({
      ...updateResourceGroupDto,
      id: id,
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: number) {
    return await this.tasksService.RemoveTaskColumn({
      id: id,
    });
  }
}
