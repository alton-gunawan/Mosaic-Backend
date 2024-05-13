import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskUpdatedEvent } from '../impl/task-updated.event';
import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ResourcesService } from '../../../protos/resource';

@EventsHandler(TaskUpdatedEvent)
export class TaskUpdatedHandler
  implements IEventHandler<TaskUpdatedEvent>, OnModuleInit
{
  private readonly logger = new Logger(TaskUpdatedHandler.name);
  private resourceService: ResourcesService;

  constructor(
    @Inject('RESOURCE_PACKAGE')
    private readonly resourcePackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.resourceService =
      this.resourcePackageClient.getService('ResourcesService');
  }

  async handle(event: TaskUpdatedEvent) {
    // this.logger.log('TaskUpdatedEvent handled successfully!');
    // this.logger.log(this.resourceService);
    // this.logger.log(
    //   JSON.stringify(
    //     await this.resourcePackageClient.getService('ResourcesService'),
    //   ),
    // );
    const response = await this.resourceService.AssignResource({
      resourceId: event.resourceId,
      taskId: event.taskId,
      unit: event.unit,
    });

    return;

    this.logger.log('TaskUpdatedEvent handled successfully!');
    this.logger.log(response);
    this.logger.log(response?.statusCode);
    this.logger.log(JSON.stringify(response));
  }
}
