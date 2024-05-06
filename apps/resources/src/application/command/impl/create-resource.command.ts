import { ICommand } from '@nestjs/cqrs';

export class CreateResourceCommand implements ICommand {
  public readonly name: string;
  public readonly unit: number;
  public readonly projectId: string;
  public readonly resourceGroup: string;

  constructor(name: string, unit: number, projectId: string) {
    this.name = name;
    this.unit = unit;
    this.projectId = projectId;
  }
}
