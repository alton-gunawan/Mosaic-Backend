import { ICommand } from '@nestjs/cqrs';

export class CreateResourceGroupCommand implements ICommand {
  public readonly name: string;
  public readonly description: string;
  public readonly projectId: number;

  constructor(name: string, description: string, projectId: number) {
    this.name = name;
    this.description = description;
    this.projectId = projectId;
  }
}
