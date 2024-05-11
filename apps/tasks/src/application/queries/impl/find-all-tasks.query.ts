import { IQuery } from '@nestjs/cqrs';

export class FindAllTasksQuery implements IQuery {
  constructor(
    public readonly id: number,
    public createdBy: string,
    public projectId: string,
    public taskColumnId: string,
  ) {}
}
