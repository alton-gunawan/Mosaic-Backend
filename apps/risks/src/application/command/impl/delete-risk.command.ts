import { ICommand } from '@nestjs/cqrs';

export class DeleteRiskCommand implements ICommand {
  public readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
