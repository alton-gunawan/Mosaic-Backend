import { IQuery } from '@nestjs/cqrs';

export class GetResourceSummaryQuery implements IQuery {
  public readonly projectId: string | number;

  constructor(projectId: string | number) {
    this.projectId = projectId;
  }
}
