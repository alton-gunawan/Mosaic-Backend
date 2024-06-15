import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateIssueCommand } from '../impl/update-issue.command';
import { Issue } from 'apps/risks/src/entity/issue.entity';

@CommandHandler(UpdateIssueCommand)
export class UpdateIssueHandler
  implements ICommandHandler<UpdateIssueCommand, any | object>
{
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  async execute(command: UpdateIssueCommand): Promise<any> {
    const { id, ...data } = command;

    const issueResponse = await this.issueRepository.update(id, {
      ...data,
    });

    return issueResponse;
  }
}
