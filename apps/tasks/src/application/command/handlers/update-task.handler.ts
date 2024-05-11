import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../impl/update-task.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../../entity/task.entity';
import { Repository, UpdateResult } from 'typeorm';
import { TaskUpdatedEvent } from '../../events/impl/task-updated.event';
import { Logger } from '@nestjs/common';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler
  implements ICommandHandler<UpdateTaskCommand, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: UpdateTaskCommand): Promise<UpdateResult> {
    const { id, taskColumnId, resources, ...data } = command;

    const taskResponse = await this.taskRepository.update(id, {
      ...data,
    });

    Logger.log(resources);
    Logger.log(JSON.stringify(resources));

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
