import { ICommand } from '@nestjs/cqrs';
import {
  RiskCategory,
  RiskLikelihood,
  RiskPriority,
  RiskStatus,
} from 'apps/risks/src/protos/risk';

export class CreateRiskCommand implements ICommand {
  public readonly name: string;
  public readonly description: string;
  public readonly likelihood: RiskLikelihood;
  public readonly category: RiskCategory;
  public readonly status: RiskStatus;
  public readonly mitigation: string;
  public readonly priority: RiskPriority;
  public readonly ownership: string;
  public readonly projectId: number;

  constructor(
    name: string,
    description: string,
    likelihood: RiskLikelihood,
    category: RiskCategory,
    status: RiskStatus,
    mitigation: string,
    priority: RiskPriority,
    ownership: string,
    projectId: number,
  ) {
    this.name = name;
    this.description = description;
    this.likelihood = likelihood;
    this.category = category;
    this.status = status;
    this.mitigation = mitigation;
    this.priority = priority;
    this.ownership = ownership;
    this.projectId = projectId;
  }
}
