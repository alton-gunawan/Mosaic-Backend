import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetResourceSummaryQuery } from '../impl/get-resource-summary.query';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceAllocation } from 'apps/resources/src/entity/resource-allocation.entity';
import { Repository } from 'typeorm';
import { Resource } from '../../../entity/resource.entity';

@QueryHandler(GetResourceSummaryQuery)
export class GetResourceSummaryHandler
  implements IQueryHandler<GetResourceSummaryQuery, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
    @InjectRepository(ResourceAllocation)
    private readonly resourceAllocationRepository: Repository<ResourceAllocation>,
  ) {}

  async execute(command: GetResourceSummaryQuery): Promise<any> {
    return;
  }
}
