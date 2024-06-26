import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssignResourceCommand } from '../impl/assign-resource.command';
import { ResourceAllocation } from 'apps/resources/src/entity/resource-allocation.entity';

@CommandHandler(AssignResourceCommand)
export class AssignResourceHandler
  implements ICommandHandler<AssignResourceCommand, any | object>
{
  constructor(
    @InjectRepository(ResourceAllocation)
    private readonly resourceAllocationRepository: Repository<ResourceAllocation>,
  ) {}

  async execute(command: AssignResourceCommand): Promise<any> {
    return await this.resourceAllocationRepository.save({
      resource: { id: command.resourceId },
      taskId: command.taskId,
      allocatedUnit: command.allocatedUnit,
    });
  }
}
