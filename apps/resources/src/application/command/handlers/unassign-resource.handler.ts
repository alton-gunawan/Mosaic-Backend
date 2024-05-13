import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnassignResourceCommand } from '../impl/unassign-resource.command';
// import { ResourceAllocation } from 'apps/resources/src/entity/resource-allocation.entity';

@CommandHandler(UnassignResourceCommand)
export class UnassignResourceHandler
  implements ICommandHandler<UnassignResourceCommand, any | object>
{
  constructor(
    // @InjectRepository(ResourceAllocation)
    // private readonly resourceAllocationRepository: Repository<ResourceAllocation>,
  ) {}

  async execute(command: UnassignResourceCommand): Promise<void> {
    // const { id } = command;
    // await this.resourceAllocationRepository.delete(id);
  }
}
