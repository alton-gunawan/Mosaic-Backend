import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteTaskColumnCommand } from '../impl/delete-task-column.command';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskGroup } from '../../../entity/task-group.entity';
import { Repository } from 'typeorm';

@CommandHandler(DeleteTaskColumnCommand)
export class DeleteTaskColumnHandler
  implements ICommandHandler<DeleteTaskColumnCommand, any | object>
{
  constructor(
    @InjectRepository(TaskGroup)
    private readonly taskGroupRepository: Repository<TaskGroup>,
  ) {}

  async execute(command: DeleteTaskColumnCommand): Promise<any> {
    const { id } = command;
    await this.taskGroupRepository.delete(id);
  }
}
