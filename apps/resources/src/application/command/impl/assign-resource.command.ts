import { ICommand } from '@nestjs/cqrs';

export class AssignResourceCommand implements ICommand {
  public readonly resourceId: number;
  public readonly targetId: number;
  public readonly unit: number;
  public readonly projectId: string;

  constructor(
    resourceId: number,
    targetId: number,
    unit: number,
    projectId: string,
  ) {
    this.resourceId = resourceId;
    this.targetId = targetId;
    this.unit = unit;
    this.projectId = projectId;
  }
}
