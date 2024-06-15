import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Issue } from 'apps/risks/src/entity/issue.entity';
import { ListIssuesQuery } from '../impl/list-issues.query';

@QueryHandler(ListIssuesQuery)
export class ListIssueHandler
  implements IQueryHandler<ListIssuesQuery, any | object>
{
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  async execute(command: ListIssuesQuery): Promise<any> {
    const { limit, offset, ...condition } = command;

    return await this.issueRepository.find({
      where: { ...condition },
      // take: limit,
      // skip: offset,
    });
  }
}
