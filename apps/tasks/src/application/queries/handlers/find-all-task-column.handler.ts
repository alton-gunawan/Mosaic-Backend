import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllTaskColumnQuery } from '../impl/find-all-task-column.query';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskGroup } from '../../../entity/task-group.entity';
import { Repository } from 'typeorm';

@QueryHandler(FindAllTaskColumnQuery)
export class FindAllTaskColumnQueryHandler
  implements IQueryHandler<FindAllTaskColumnQuery, any | object>
{
  constructor(
    @InjectRepository(TaskGroup)
    private readonly taskGroupRepository: Repository<TaskGroup>,
  ) {}

  async execute(command: FindAllTaskColumnQuery): Promise<TaskGroup[]> {
    return await this.taskGroupRepository.find({
      relations: ['task'],
      where: { projectId: command.projectId },
    });
  }
}
