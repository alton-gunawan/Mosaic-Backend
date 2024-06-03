import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListTaskQuery } from '../impl/find-all-tasks.query';
import { Task } from '../../../entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryHandler(ListTaskQuery)
export class ListTaskHandler
  implements IQueryHandler<ListTaskQuery, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async execute(command: ListTaskQuery): Promise<any> {
    return await this.taskRepository.find({
      where: {
        projectId: command.projectId,
      },
    });
  }
}
