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
      startDate: new Date(command.startDate).toISOString(),
      endDate: new Date(command.startDate).toISOString(),
      task_group: { id: +command.taskColumnId },
    });
  }
}
