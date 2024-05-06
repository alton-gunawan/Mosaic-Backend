import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetRiskSummaryQuery } from '../impl/get-risk-summary.query';

@QueryHandler(GetRiskSummaryQuery)
export class GetRiskSummaryHandler
  implements IQueryHandler<GetRiskSummaryQuery, any | object>
{
  async execute(command: GetRiskSummaryQuery): Promise<any> {
    return;
  }
}
