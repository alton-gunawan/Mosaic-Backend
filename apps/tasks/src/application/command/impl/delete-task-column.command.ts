import { ICommand } from '@nestjs/cqrs';

export class DeleteTaskColumnCommand implements ICommand {
  constructor(public id: string) {}
}
