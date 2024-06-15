import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIssueCommand } from '../impl/create-issue.command';
import { Issue } from 'apps/risks/src/entity/issue.entity';

@CommandHandler(CreateIssueCommand)
export class CreateIssueHandler
  implements ICommandHandler<CreateIssueCommand, any | object>
{
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  async execute(command: CreateIssueCommand): Promise<any> {
    const response = await this.issueRepository.save({
      ...command,
    });

    return response;
  }
}
