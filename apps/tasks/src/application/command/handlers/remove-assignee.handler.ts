import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Task } from '../../../entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RemoveAssigneeCommand } from '../impl/remove-assignee.command';
import { NotFoundException } from '@nestjs/common';
import { TaskAssignees } from 'apps/tasks/src/entity/task-assignees.entity';

@CommandHandler(RemoveAssigneeCommand)
export class RemoveAssigneeHandler
  implements ICommandHandler<RemoveAssigneeCommand, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskAssigneeRepository: Repository<TaskAssignees>,
  ) {}

  async execute(command: RemoveAssigneeCommand): Promise<any> {
    const { taskAssigneeId } = command;

    const task = await this.taskAssigneeRepository.findOne({
      where: { id: taskAssigneeId },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${taskAssigneeId} not found`);
    }

    return await this.taskAssigneeRepository.delete(taskAssigneeId);
  }
}
