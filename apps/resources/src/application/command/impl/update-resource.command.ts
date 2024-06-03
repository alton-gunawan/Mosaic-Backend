import { ICommand } from '@nestjs/cqrs';

export class UpdateResourceCommand implements ICommand {
  public readonly id: number;
  public readonly name: string;
  public readonly cost: number;
  public readonly unitId: number;
  public readonly unitQuantity: number;

  constructor(
    id: number,
    name: string,
    cost: number,
    unitId: number,
    unitQuantity: number,
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.unitId = unitId;
    this.unitQuantity = unitQuantity;
  }
}
