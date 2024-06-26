import { ICommand } from '@nestjs/cqrs';

export class AssignTaskCommand implements ICommand {
  constructor(
    public readonly taskId: number,
    public readonly userId: Array<string>,
  ) {}
}
