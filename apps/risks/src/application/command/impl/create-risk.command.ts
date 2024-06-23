import { ICommand } from '@nestjs/cqrs';
import { RiskCategory, RiskLikelihood } from 'apps/risks/src/protos/risk';

export class CreateRiskCommand implements ICommand {
  public readonly name: string;
  public readonly description: string;
  public readonly likelihood: RiskLikelihood;
  public readonly category: RiskCategory;
  public readonly mitigation: string;
  public readonly ownership: string;
  public readonly projectId: number;

  constructor(
    name: string,
    description: string,
    likelihood: RiskLikelihood,
    category: RiskCategory,
    mitigation: string,
    ownership: string,
    projectId: number,
  ) {
    this.name = name;
    this.description = description;
    this.likelihood = likelihood;
    this.category = category;
    this.mitigation = mitigation;
    this.ownership = ownership;
    this.projectId = projectId;
  }
}
