import { ICommand } from '@nestjs/cqrs';

export class RemoveAssigneeCommand implements ICommand {
  constructor(public readonly taskAssigneeId: number) {}
}
