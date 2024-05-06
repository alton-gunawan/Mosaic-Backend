import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteResourceCommand } from '../impl/delete-resource.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from '../../../entity/resource.entity';
import { Repository } from 'typeorm';

@CommandHandler(DeleteResourceCommand)
export class DeleteResourceHandler
  implements ICommandHandler<DeleteResourceCommand, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async execute(command: DeleteResourceCommand): Promise<void> {
    const { id } = command;
    await this.resourceRepository.softDelete(id);
  }
}
