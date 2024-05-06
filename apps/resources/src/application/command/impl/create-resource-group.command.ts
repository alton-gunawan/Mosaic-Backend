import { ICommand } from '@nestjs/cqrs';

export class CreateResourceGroupCommand implements ICommand {
  public readonly name: string;
  public readonly description: string;
  public readonly projectId: string;

  constructor(name: string, description: string, projectId: string) {
    this.name = name;
    this.description = description;
    this.projectId = projectId;
  }
}
