import { IQuery } from '@nestjs/cqrs';

export class GetResourceAllocationByCriteriaQuery implements IQuery {
  projectId: string;
  resourceId: number;
  taskId: number;

  constructor(projectId: string, resourceId: number, taskId: number) {
    this.projectId = projectId;
    this.resourceId = resourceId;
    this.taskId = taskId;
  }
}
