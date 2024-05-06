import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateResourceCommand } from '../impl/update-resource.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from '../../../entity/resource.entity';
import { Repository } from 'typeorm';

@CommandHandler(UpdateResourceCommand)
export class UpdateResourceHandler
  implements ICommandHandler<UpdateResourceCommand, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async execute(command: UpdateResourceCommand): Promise<void> {
    const { id } = command;
    await this.resourceRepository.update(id, { ...command });
  }
}
