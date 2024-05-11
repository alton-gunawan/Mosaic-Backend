import { ICommand } from '@nestjs/cqrs';

export class AssignResourceCommand implements ICommand {
  public readonly resourceId: number;
  public readonly taskId: number;
  public readonly unit: number;

  constructor(
    resourceId: number,
    taskId: number,
    unit: number,
  ) {
    this.resourceId = resourceId;
    this.taskId = taskId;
    this.unit = unit;
  }
}
