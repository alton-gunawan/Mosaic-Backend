import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceGroup } from '../../../entity/resource-group.entity';
import { DeleteResourceGroupCommand } from '../impl/delete-resource-group.command';

@CommandHandler(DeleteResourceGroupCommand)
export class DeleteResourceGroupHandler
  implements ICommandHandler<DeleteResourceGroupCommand, any | object>
{
  constructor(
    @InjectRepository(ResourceGroup)
    private readonly resourceGroupRepository: Repository<ResourceGroup>,
  ) {}

  async execute(command: DeleteResourceGroupCommand): Promise<void> {
    const { id } = command;
    await this.resourceGroupRepository.softDelete(id);
  }
}
