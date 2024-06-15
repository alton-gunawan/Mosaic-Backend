import { IQuery } from '@nestjs/cqrs';
import { PaginationQuery } from './pagination-query';

export class ListIssuesQuery extends PaginationQuery implements IQuery {
  constructor(
    public readonly id: number,
    public readonly taskId: number,
    public readonly projectId: number,
    limit?: number,
    offset?: number,
  ) {
    super(limit, offset);
  }
}
