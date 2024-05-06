import { ICommand } from '@nestjs/cqrs';

export class UpdateResourceCommand implements ICommand {
  public readonly id: number;
  public readonly name: string;
  public readonly unit: number;

  constructor(id: number, name: string, unit: number) {
    this.id = id;
    this.name = name;
    this.unit = unit;
  }
}
