import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetResourceByCriteriaQuery } from '../impl/get-resource-by-criteria.query';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Resource } from '../../../entity/resource.entity';

@QueryHandler(GetResourceByCriteriaQuery)
export class GetResourceByCriteriaHandler
  implements IQueryHandler<GetResourceByCriteriaQuery, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async execute(command: GetResourceByCriteriaQuery): Promise<Resource[]> {
    return await this.resourceRepository.find({
      relations: ['resource_allocation'],
      // where: {
      //   resource_allocation: {
      //     taskId:
      //       typeof command.taskId == 'number'
      //         ? command.taskId
      //         : In(command.taskId),
      //   },
      // },
    });
  }
}
