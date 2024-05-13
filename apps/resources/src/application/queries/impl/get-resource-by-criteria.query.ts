import { IQuery } from '@nestjs/cqrs';

export class GetResourceByCriteriaQuery implements IQuery {
  public readonly id: number;
  public readonly projectId: string;
  public readonly taskId: number | number[];

  constructor(id: number, projectId: string, taskId: number | number[]) {
    this.id = id;
    this.projectId = projectId;
    this.taskId = taskId;
  }
}
