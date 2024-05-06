import { IQuery } from '@nestjs/cqrs';

export class GetResourceByCriteriaQuery implements IQuery {
  public readonly id: number;
  public readonly projectId: string;

  constructor(id: number, projectId: string) {
    this.id = id;
    this.projectId = projectId;
  }
}
