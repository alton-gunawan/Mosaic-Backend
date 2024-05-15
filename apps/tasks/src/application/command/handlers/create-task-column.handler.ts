import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskColumnCommand } from '../impl/create-task-column.command';
import { TaskGroup } from '../../../entity/task-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateTaskColumnCommand)
export class CreateTaskColumnHandler
  implements ICommandHandler<CreateTaskColumnCommand, any | object>
{
  constructor(
    @InjectRepository(TaskGroup)
    private readonly taskGroupRepository: Repository<TaskGroup>,
  ) {}

  async execute(command: CreateTaskColumnCommand): Promise<TaskGroup> {
    Logger.log('CreateTaskColumnCommand...', JSON.stringify(command));
    return await this.taskGroupRepository.save({
      ...command,
      projectId: command.projectId,
    });
  }
}
