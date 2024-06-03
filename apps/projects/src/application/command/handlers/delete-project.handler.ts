import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteProjectCommand } from '../impl/delete-project.command';
import { Project } from '../../../entity/project.entity';

@CommandHandler(DeleteProjectCommand)
export class DeleteProjectHandler
  implements ICommandHandler<DeleteProjectCommand, any | object>
{
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async execute(command: DeleteProjectCommand): Promise<void> {
    await this.projectRepository.delete(command.id);
  }
}
