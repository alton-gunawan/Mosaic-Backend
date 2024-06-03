import { ICommand } from '@nestjs/cqrs';
import { Unit } from 'apps/resources/src/protos/resource';

export class CreateResourceCommand implements ICommand {
  public readonly name: string;
  public readonly cost: number;
  public readonly unitQuantity: number;
  public readonly unit: Unit;
  public readonly resourceGroupId: number;
  public readonly projectId: number;

  constructor(
    name: string,
    cost: number,
    unitQuantity: number,
    unit: Unit,
    resourceGroupId: number,
    projectId: number,
  ) {
    this.name = name;
    this.cost = cost;
    this.unitQuantity = unitQuantity;
    this.unit = unit;
    this.resourceGroupId = resourceGroupId;
    this.projectId = projectId;
  }
}
