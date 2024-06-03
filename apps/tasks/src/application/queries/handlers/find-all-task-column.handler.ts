import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListTaskColumnQuery } from '../impl/find-all-task-column.query';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskGroup } from '../../../entity/task-group.entity';
import { Repository } from 'typeorm';

@QueryHandler(ListTaskColumnQuery)
export class ListTaskColumnHandler
  implements IQueryHandler<ListTaskColumnQuery, any | object>
{
  constructor(
    @InjectRepository(TaskGroup)
    private readonly taskGroupRepository: Repository<TaskGroup>,
  ) {}

  async execute(command: ListTaskColumnQuery): Promise<TaskGroup[]> {
    return await this.taskGroupRepository.find({
      relations: ['task'],
      where: { projectId: command.projectId },
    });
  }
}
