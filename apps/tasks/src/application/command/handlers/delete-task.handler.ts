import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteTaskCommand } from '../impl/delete-task.command';
import { Task } from '../../../entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler
  implements ICommandHandler<DeleteTaskCommand, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async execute(command: DeleteTaskCommand): Promise<any> {
    const { id } = command;
    await this.taskRepository.delete(id);
  }
}
