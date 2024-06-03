import { IQuery } from '@nestjs/cqrs';

export class ListRisksQuery implements IQuery {
  public readonly id: number;
  public readonly taskId: number;
  public readonly projectId: number;
  public readonly limit: number;
  public readonly offset: number;

  constructor(
    id: number,
    taskId: number,
    projectId: number,
    limit: number,
    offset: number,
  ) {
    this.id = id;
    this.taskId = taskId;
    this.projectId = projectId;
    this.limit = limit;
    this.offset = offset;
  }
}
