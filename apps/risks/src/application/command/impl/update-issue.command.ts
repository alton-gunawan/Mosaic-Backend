import { ICommand } from '@nestjs/cqrs';
import { IssuePriority, IssueStatus } from 'apps/gateway/src/protos/risk';

export class UpdateIssueCommand implements ICommand {
  constructor(
    public readonly id: number,
    public readonly summary: string,
    public readonly description: string,
    public readonly status: IssueStatus,
    public readonly priority: IssuePriority,
    public readonly reportedBy: string,
    public readonly ownership: string,
    public readonly taskId: number,
  ) {}
}
