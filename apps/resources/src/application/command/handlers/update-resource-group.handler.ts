import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceGroup } from '../../../entity/resource-group.entity';
import { UpdateResourceGroupCommand } from '../impl/update-resource-group.command';

@CommandHandler(UpdateResourceGroupCommand)
export class UpdateResourceGroupHandler
  implements ICommandHandler<UpdateResourceGroupCommand, any | object>
{
  constructor(
    @InjectRepository(ResourceGroup)
    private readonly resourceGroupRepository: Repository<ResourceGroup>,
  ) {}

  async execute(command: UpdateResourceGroupCommand): Promise<void> {
    const { id } = command;
    await this.resourceGroupRepository.update(id, { ...command });
  }
}
