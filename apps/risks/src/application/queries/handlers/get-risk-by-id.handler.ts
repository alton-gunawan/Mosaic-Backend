import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetRiskByIdQuery } from '../impl/get-risk-by-id.query';

@QueryHandler(GetRiskByIdQuery)
export class GetRiskByIdHandler
  implements IQueryHandler<GetRiskByIdQuery, any | object>
{
  async execute(command: GetRiskByIdQuery): Promise<any> {
    return;
  }
}
