import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../impl/update-task.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../../entity/task.entity';
import { Repository, UpdateResult } from 'typeorm';
import { TaskUpdatedEvent } from '../../events/impl/task-updated.event';
import { Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler
  implements ICommandHandler<UpdateTaskCommand, any | object>, OnModuleInit
{
  private resourcesService: any;

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly eventBus: EventBus,
    @Inject('RESOURCE_PACKAGE')
    private readonly resourcePackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.resourcesService =
      this.resourcePackageClient.getService('ResourcesService');
  }

  async execute(command: UpdateTaskCommand): Promise<UpdateResult> {
    const { id, taskColumnId, resources, ...data } = command;

    const taskResponse = await this.taskRepository.update(id, {
      ...data,
    });

    try {
      const resourceResponse = await this.resourcesService.CreateResource({
        name: 'Resource 1',
        unit: 1,
        projectId: '1',
        resourceGroupId: '1',
      });

      Logger.log('resourceResponse inside task handler!');
      Logger.log(resourceResponse);
      Logger.log(JSON.stringify(resourceResponse));
    } catch (error) {
      Logger.error("error inside task handler's resource service call!");
      Logger.error(error);
      Logger.error(JSON.stringify(error));
    }

    if (taskResponse.affected > 0 && resources) {
      resources.forEach(async (resource) => {
        await this.eventBus.publish(
          new TaskUpdatedEvent(resource.id, id, resource.unit),
        );
      });
    }

    return taskResponse;
  }
}
