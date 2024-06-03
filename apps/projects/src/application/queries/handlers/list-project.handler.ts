import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListProjectQuery } from '../impl/list-project.query';
import { Project } from 'apps/projects/src/entity/project.entity';

@QueryHandler(ListProjectQuery)
export class ListProjectHandler
  implements IQueryHandler<ListProjectQuery, any | object>
{
  constructor(
    @InjectRepository(Project)
    private readonly taskRepository: Repository<Project>,
  ) {}

  async execute(command: ListProjectQuery): Promise<any> {
    return await this.taskRepository.find({
      where: { ...command },
    });
  }
}
