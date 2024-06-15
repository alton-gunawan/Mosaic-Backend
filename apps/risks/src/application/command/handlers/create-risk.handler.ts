import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateRiskCommand } from '../impl/create-risk.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Risk } from '../../../entity/risk.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateRiskCommand)
export class CreateRiskHandler
  implements ICommandHandler<CreateRiskCommand, any | object>
{
  constructor(
    @InjectRepository(Risk)
    private readonly riskRepository: Repository<Risk>,
  ) {}

  async execute(command: CreateRiskCommand): Promise<any> {
    Logger.log('CreateRiskCommand:execute()');
    Logger.log(JSON.stringify(command));

    const response = await this.riskRepository.save({
      ...command,
    });

    return response;
  }
}
