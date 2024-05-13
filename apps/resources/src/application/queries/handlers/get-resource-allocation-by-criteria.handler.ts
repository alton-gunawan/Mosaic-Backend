import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetResourceAllocationByCriteriaQuery } from '../impl/get-resource-allocation-by-criteria.handler';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceAllocation } from 'apps/resources/src/entity/resource-allocation.entity';

@QueryHandler(GetResourceAllocationByCriteriaQuery)
export class GetResourceAllocationByCriteriaHandler
  implements IQueryHandler<GetResourceAllocationByCriteriaQuery, any | object>
{
  constructor(
    @InjectRepository(ResourceAllocation)
    private readonly resourceAllocationRepository: Repository<ResourceAllocation>,
  ) {}

  async execute(
    command: GetResourceAllocationByCriteriaQuery,
  ): Promise<any[]> {
    return await this.resourceAllocationRepository.find({
      where: {
        ...command,
      },
    });
  }
}
