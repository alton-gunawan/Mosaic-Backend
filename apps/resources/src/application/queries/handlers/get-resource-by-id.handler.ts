import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetResourceByIdQuery } from '../impl/get-resource-by-id.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from '../../../entity/resource.entity';

@QueryHandler(GetResourceByIdQuery)
export class GetResourceByIdHandler
  implements IQueryHandler<GetResourceByIdQuery, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async execute(command: GetResourceByIdQuery): Promise<Resource> {
    const { id } = command;
    return await this.resourceRepository.findOneBy({ id });
  }
}
