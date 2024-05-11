import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskUpdatedEvent } from '../impl/task-updated.event';
import { Repository } from 'typeorm';
import { Task } from '../../../entity/task.entity';
import { Inject, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientGrpc } from '@nestjs/microservices';
import { ResourcesService } from '../../../protos/resource';

@EventsHandler(TaskUpdatedEvent)
export class TaskUpdatedHandler implements IEventHandler<TaskUpdatedEvent> {
  private readonly logger = new Logger(TaskUpdatedHandler.name);
  private resourceService: ResourcesService;

  constructor(
    @Inject('RESOURCE_PACKAGE')
    private readonly resourcePackageClient: ClientGrpc,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {
    this.resourceService =
      this.resourcePackageClient.getService('ResourcesService');
  }

  async handle(event: TaskUpdatedEvent) {
    const response = await this.resourceService.AssignResource({
      resourceId: event.resourceId,
      taskId: event.taskId,
      unit: event.unit,
    });

    this.logger.log('TaskUpdatedEvent handled successfully!');
    this.logger.log(response);
    this.logger.log(JSON.stringify(response));
  }
}
