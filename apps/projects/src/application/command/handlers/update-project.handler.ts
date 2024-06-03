import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProjectCommand } from '../impl/update-project.command';
import { Project } from '../../../entity/project.entity';

@CommandHandler(UpdateProjectCommand)
export class UpdateProjectHandler
  implements ICommandHandler<UpdateProjectCommand, any | object>
{
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async execute(command: UpdateProjectCommand): Promise<any> {
    const { id, ...updatedCommand } = command;

    return await this.projectRepository.update(id, {
      ...updatedCommand,
    });
  }
}
