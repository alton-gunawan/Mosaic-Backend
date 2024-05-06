import { ICommand } from '@nestjs/cqrs';

export class DeleteResourceCommand implements ICommand {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}
