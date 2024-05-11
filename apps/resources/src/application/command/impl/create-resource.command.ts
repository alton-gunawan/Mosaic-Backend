import { ICommand } from '@nestjs/cqrs';

export class CreateResourceCommand implements ICommand {
  public readonly name: string;
  public readonly unit: number;
  public readonly resourceGroupId: string;
  public readonly projectId: string;

  constructor(name: string, unit: number, resourceGroupId: string, projectId: string) {
    this.name = name;
    this.unit = unit;
    this.resourceGroupId = resourceGroupId;
    this.projectId = projectId;
  }
}
