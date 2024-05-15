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
import {
  combineLatest,
  concat,
  concatMap,
  firstValueFrom,
  from,
  map,
  of,
} from 'rxjs';

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
    const taskResponse$ = await this.taskService.CreateTask({
      ...createTaskDto,
    });

    return taskResponse$;
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

    const resourceResponse$ = updateTaskDto?.resources
      ? updateTaskDto?.resources.map((value) => {
          return from(
            this.resourcesService.AssignResource({
              resourceId: value.id,
              taskId: id,
              unit: value.unit,
            }),
          );
        })
      : from([]);

    // this works:
    // const resourceResponse$ = updateTaskDto?.resources
    //   ? from(
    //       this.resourcesService.AssignResource({
    //         resourceId: updateTaskDto.resources[0].id,
    //         taskId: id,
    //         unit: updateTaskDto.resources[0].unit,
    //       }),
    //     )
    //   : from([]);

    // const resourceResponse$ = updateTaskDto?.resources
    //   ? from(
    //       updateTaskDto?.resources?.map(async (resource) => {
    //         const response = from(
    //           this.resourcesService.AssignResource({
    //             resourceId: resource.id,
    //             taskId: id,
    //             unit: resource.unit,
    //           }),
    //         );

    //         return {
    //           resourceId: resource.id,
    //           taskId: id,
    //         };
    //       }),
    //     )
    //   : from([]);

    return concat(taskResponse$, resourceResponse$).subscribe({
      next(value) {
        Logger.log('Combined response:', JSON.stringify(value)); // Log the response for each resource
        value;
      },
    });

    // const response =
    //   updateTaskDto?.resources &&
    //   from(
    //     this.resourcesService.AssignResource({
    //       resourceId: updateTaskDto.resources[0].id,
    //       taskId: id,
    //       unit: updateTaskDto.resources[0].unit,
    //     }),
    //   );

    return updateTaskDto?.resources
      ? concat(taskResponse$).subscribe({
          next(value) {
            Logger.log('Combined response:', JSON.stringify(value)); // Log the response for each resource
            value;
          },
          error(err) {
            Logger.error('Error taskResponse$ 1:', err);
          },
        })
      : taskResponse$.subscribe({
          next(value) {
            Logger.log('Combined response no resource:', JSON.stringify(value)); // Log the response for each resource
            value;
          },
          error(err) {
            Logger.error('Error taskResponse$ 2:', err);
          },
        });

    // const combinedResponse$ = from(updateTaskDto?.resources).pipe(
    //   concatMap((resource) =>
    //     concat(
    //       from(
    //         this.taskService.UpdateTask({ ...updateTaskDto, id: String(id) }),
    //       ),
    //       from(
    //         this.resourcesService.AssignResource({
    //           resourceId: resource.id,
    //           taskId: id,
    //           unit: resource.unit,
    //         }),
    //       ),
    //     ),
    //   ),
    // );

    // return combinedResponse$.subscribe({
    //   next(value) {
    //     Logger.log('Combined response:', value); // Log the response for each resource
    //   },
    //   error(error) {
    //     // Handle errors from the subscription
    //     console.error('Error in subscription:', error);
    //   },
    // });

    // const taskResponse$ = from(
    //   this.taskService.UpdateTask({
    //     ...updateTaskDto,
    //     id: String(id),
    //   }),
    // );

    // const resourceResponse$ = from(updateTaskDto.resources).pipe(
    //   map((resource) =>
    //     from(
    //       this.resourcesService.AssignResource({
    //         resourceId: resource.id,
    //         taskId: id,
    //         unit: resource.unit,
    //       }),
    //     ),
    //   ),
    // );

    // if (updateTaskDto?.resources?.length ?? 0 > 0) {
    //   this.logger.log('updateTaskDto.resources');
    //   const resourceResponse$ = from(updateTaskDto.resources).pipe(
    //     map((resource) =>
    //       from(
    //         this.resourcesService.AssignResource({
    //           resourceId: resource.id,
    //           taskId: id,
    //           unit: resource.unit,
    //         }),
    //       ),
    //     ),
    //   );

    //   const result$ = concat(taskResponse$, resourceResponse$);

    //   const combinedResponse$ = combineLatest(taskResponse$, resourceResponse$);

    // return firstValueFrom(combinedResponse$).then(
    //   ([taskData, resourcesData]) => ({
    //     ...taskData,
    //     resources: resourcesData,
    //   }),
    // );

    // return result$.subscribe({
    //   next(value) {
    //     Logger.log('value');
    //     Logger.log(value);
    //     value;
    //   },
    // });
    // } else {
    //   this.logger.log('false updateTaskDto.resources');
    //   return taskResponse$.subscribe({
    //     next(value) {
    //       return value;
    //     },
    //   });
    // }
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
