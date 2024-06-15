import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteIssueCommand } from '../impl/delete-issue.command';
import { Issue } from 'apps/risks/src/entity/issue.entity';

@CommandHandler(DeleteIssueCommand)
export class DeleteIssueHandler
  implements ICommandHandler<DeleteIssueCommand, any | object>
{
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  async execute(command: DeleteIssueCommand): Promise<any> {
    if (!command.id) return;

    const response = await this.issueRepository.delete({
      id: command.id,
    });

    return response;
  }
}
