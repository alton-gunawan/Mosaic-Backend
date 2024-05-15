import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../impl/create-task.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../../entity/task.entity';
import { Repository } from 'typeorm';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler
  implements ICommandHandler<CreateTaskCommand, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async execute(command: CreateTaskCommand): Promise<any> {
    return await this.taskRepository.save({
      ...command,
      startDate: command.startDate
        ? new Date(command?.startDate)
        : null,
      endDate: command.endDate
        ? new Date(command?.endDate)
        : null,
      task_group: command.taskColumnId ? { id: +command.taskColumnId } : null,
    });
  }
}
