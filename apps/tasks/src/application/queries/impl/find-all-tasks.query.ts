import { IQuery } from '@nestjs/cqrs';

export class ListTaskQuery implements IQuery {
  constructor(
    public readonly id: number,
    public createdBy: string,
    public projectId: number,
    public taskColumnId: number,
  ) {}
}
