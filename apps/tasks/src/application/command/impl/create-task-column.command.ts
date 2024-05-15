import { ICommand } from '@nestjs/cqrs';

export class CreateTaskColumnCommand implements ICommand {
  constructor(
    public name: string,
    public limit: number,
    public order: number,
    public projectId: number,
  ) {}
}
