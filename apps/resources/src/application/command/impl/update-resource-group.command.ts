import { ICommand } from '@nestjs/cqrs';

export class UpdateResourceGroupCommand implements ICommand {
  public readonly id: number;
  public readonly name: string;
  public readonly description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
