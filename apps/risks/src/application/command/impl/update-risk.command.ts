import { ICommand } from '@nestjs/cqrs';
import {
  RiskCategory,
  RiskLikelihood,
} from 'apps/risks/src/protos/risk';

export class UpdateRiskCommand implements ICommand {
  public readonly id: number;
  public readonly name: string;
  public readonly description: string;
  public readonly category: RiskCategory;
  public readonly likelihood: RiskLikelihood;
  public readonly mitigation: string;
  public readonly ownership: string;
  public readonly projectId: number;

  constructor(
    id: number,
    name: string,
    description: string,
    category: RiskCategory,
    likelihood: RiskLikelihood,
    mitigation: string,
    ownership: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.likelihood = likelihood;
    this.mitigation = mitigation;
    this.ownership = ownership;
  }
}
