import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListResourceQuery } from '../impl/get-resource-by-criteria.query';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Resource } from '../../../entity/resource.entity';
import { Logger } from '@nestjs/common';

@QueryHandler(ListResourceQuery)
export class GetResourceByCriteriaHandler
  implements IQueryHandler<ListResourceQuery, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async execute(command: ListResourceQuery): Promise<Resource[]> {
    const response = await this.resourceRepository.find({
      relations: ['resourceAllocation'],
      where: {
        ...command,
        resourceAllocation: {
          taskId: command?.taskId
            ? In(
                Array.isArray(command.taskId)
                  ? command.taskId
                  : [command.taskId],
              )
            : undefined,
        },
      },
    });

    return response;
  }
}
