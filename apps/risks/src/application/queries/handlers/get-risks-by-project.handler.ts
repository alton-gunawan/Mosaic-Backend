import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetRisksByProjectQuery } from '../impl/get-risks-by-project.query';

@QueryHandler(GetRisksByProjectQuery)
export class GetRisksByProjectHandler
  implements IQueryHandler<GetRisksByProjectQuery, any | object>
{
  async execute(command: GetRisksByProjectQuery): Promise<any> {
    return;
  }
}
