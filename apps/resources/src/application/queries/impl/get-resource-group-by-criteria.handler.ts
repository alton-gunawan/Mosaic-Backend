import { IQuery } from '@nestjs/cqrs';

export class GetResourceGroupByCriteriaQuery implements IQuery {
  public readonly id: number;
  public readonly projectId: number;

  constructor(id: number, projectId: number) {
    this.id = id;
    this.projectId = projectId;
  }
}
