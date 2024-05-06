import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResourceGroupCommand } from '../impl/create-resource-group.command';
import { ResourceGroup } from '../../../entity/resource-group.entity';

@CommandHandler(CreateResourceGroupCommand)
export class CreateResourceGroupHandler
  implements ICommandHandler<CreateResourceGroupCommand, any | object>
{
  constructor(
    @InjectRepository(ResourceGroup)
    private readonly resourceGroupRepository: Repository<ResourceGroup>,
  ) {}

  async execute(command: CreateResourceGroupCommand): Promise<ResourceGroup> {
    return await this.resourceGroupRepository.save({
      name: command?.name,
      description: command?.description,
      projectId: command?.projectId,
    });
  }
}
