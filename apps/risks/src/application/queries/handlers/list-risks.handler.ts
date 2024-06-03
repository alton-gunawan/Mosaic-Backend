import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Risk } from '../../../entity/risk.entity';
import { ListRisksQuery } from '../impl/list-risks.query';

@QueryHandler(ListRisksQuery)
export class ListRiskHandler
  implements IQueryHandler<ListRisksQuery, any | object>
{
  constructor(
    @InjectRepository(Risk)
    private readonly riskRepository: Repository<Risk>,
  ) {}

  async execute(command: ListRisksQuery): Promise<any> {
    return await this.riskRepository.find({
      where: { ...command },
    });
  }
}
