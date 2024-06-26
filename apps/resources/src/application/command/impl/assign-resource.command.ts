import { ICommand } from '@nestjs/cqrs';

export class AssignResourceCommand implements ICommand {
  public readonly resourceId: number;
  public readonly taskId: number;
  public readonly allocatedUnit: number;

  constructor(
    resourceId: number,
    taskId: number,
    allocatedUnit: number,
  ) {
    this.resourceId = resourceId;
    this.taskId = taskId;
    this.allocatedUnit = allocatedUnit;
  }
}
