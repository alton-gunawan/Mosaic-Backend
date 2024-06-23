import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../impl/update-task.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../../entity/task.entity';
import { Repository } from 'typeorm';
import { TaskUpdatedEvent } from '../../events/impl/task-updated.event';
import { TaskAssignees } from 'apps/tasks/src/entity/task-assignees.entity';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler
  implements ICommandHandler<UpdateTaskCommand, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: UpdateTaskCommand): Promise<Task> {
    const { id, taskColumnId, assignees, ...data } = command;

    const taskResponse = await this.taskRepository.save({
      id: id,
      taskAssignees: [
        ...assignees.map((assigneeDto) => ({
          userId: assigneeDto,
        })),
      ],
      ...data,
    });

    // if (taskResponse.affected > 0 && resources) {
    //   resources.forEach(async (resource) => {
    //     await this.eventBus.publish(
    //       new TaskUpdatedEvent(resource.id, id, resource.unit),
    //     );
    //   });
    // }

    return taskResponse;
  }
}
