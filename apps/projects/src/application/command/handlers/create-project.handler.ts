import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectCommand } from '../impl/create-project.command';
import { Project } from '../../../entity/project.entity';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateProjectCommand)
export class CreateProjectHandler
  implements ICommandHandler<CreateProjectCommand, any | object>
{
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async execute(command: CreateProjectCommand): Promise<any> {
    const createdProject = await this.projectRepository.save({
      ...command,
    });

    Logger.log(`Project created: ${createdProject.id}`);
    Logger.log(createdProject);

    return createdProject;
  }
}
