import { IQuery } from '@nestjs/cqrs';
import { PaginationQuery } from 'apps/projects/src/utils/pagination-query';

export class ListProjectQuery extends PaginationQuery implements IQuery {
  constructor(
    public readonly id: number,
    public createdBy: string,
    limit?: number,
    offset?: number,
  ) {
    super(limit, offset);
  }
}
