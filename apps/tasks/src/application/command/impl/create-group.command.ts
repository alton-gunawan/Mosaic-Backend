import { ICommand } from '@nestjs/cqrs';

export class CreateGroupCommand implements ICommand {
  constructor(
    public readonly name: string,
    public readonly limit: number,
    public readonly projectId: number,
  ) {}
}
