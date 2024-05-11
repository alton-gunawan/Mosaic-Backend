import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateResourceCommand } from '../impl/create-resource.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from '../../../entity/resource.entity';
import { Repository } from 'typeorm';

@CommandHandler(CreateResourceCommand)
export class CreateResourceHandler
  implements ICommandHandler<CreateResourceCommand, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async execute(command: CreateResourceCommand): Promise<Resource> {
    return await this.resourceRepository.save({
      ...command,
      project_id: command.projectId,
      resource_group: { id: +command.resourceGroupId },
    });
  }
}
