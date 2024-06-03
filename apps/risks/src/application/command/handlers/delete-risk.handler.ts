import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteRiskCommand } from '../impl/delete-risk.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Risk } from '../../../entity/risk.entity';
import { Repository } from 'typeorm';

@CommandHandler(DeleteRiskCommand)
export class DeleteRiskHandler
  implements ICommandHandler<DeleteRiskCommand, any | object>
{
  constructor(
    @InjectRepository(Risk)
    private readonly riskRepository: Repository<Risk>,
  ) {}

  async execute(command: DeleteRiskCommand): Promise<any> {
    if (!command.id) return;

    const response = await this.riskRepository.delete({
      id: command.id,
    });

    return response;
  }
}
