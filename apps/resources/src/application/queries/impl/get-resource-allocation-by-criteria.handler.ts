import { IQuery } from '@nestjs/cqrs';

export class GetResourceAllocationByCriteriaQuery implements IQuery {
  projectId: string;
  resourceId: number;
  taskId: string;

  constructor(projectId: string, resourceId: number, taskId: string) {
    this.projectId = projectId;
    this.resourceId = resourceId;
    this.taskId = taskId;
  }
}
