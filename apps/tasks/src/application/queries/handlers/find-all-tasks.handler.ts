import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllTasksQuery } from '../impl/find-all-tasks.query';
import { Task } from '../../../entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryHandler(FindAllTasksQuery)
export class FindAllTasksQueryHandler
  implements IQueryHandler<FindAllTasksQuery, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async execute(command: FindAllTasksQuery): Promise<any> {
    return await this.taskRepository.find({
      where: {
        projectId: command.projectId,
      },
    });
  }
}
