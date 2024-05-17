import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetResourceGroupByCriteriaQuery } from '../impl/get-resource-group-by-criteria.handler';
import { ResourceGroup } from 'apps/resources/src/entity/resource-group.entity';

@QueryHandler(GetResourceGroupByCriteriaQuery)
export class GetResourceGroupByCriteriaHandler
  implements IQueryHandler<GetResourceGroupByCriteriaQuery, any | object>
{
  constructor(
    @InjectRepository(ResourceGroup)
    private readonly resourceGroupRepository: Repository<ResourceGroup>,
  ) {}

  async execute(
    command: GetResourceGroupByCriteriaQuery,
  ): Promise<ResourceGroup[]> {
    return await this.resourceGroupRepository.find({
      relations: ['resource'],
      where: { ...command, projectId: command?.projectId || undefined },
    });
  }
}
