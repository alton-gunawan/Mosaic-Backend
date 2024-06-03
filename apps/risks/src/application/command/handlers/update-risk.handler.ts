import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateRiskCommand } from '../impl/update-risk.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Risk } from '../../../entity/risk.entity';
import { Repository } from 'typeorm';

@CommandHandler(UpdateRiskCommand)
export class UpdateRiskHandler
  implements ICommandHandler<UpdateRiskCommand, any | object>
{
  constructor(
    @InjectRepository(Risk)
    private readonly riskRepository: Repository<Risk>,
  ) {}

  async execute(command: UpdateRiskCommand): Promise<any> {
    const { id, ...data } = command;

    const riskResponse = await this.riskRepository.update(id, {
      ...data,
    });

    return riskResponse;
  }
}
