import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateRiskCommand } from '../impl/create-risk.command';

@CommandHandler(CreateRiskCommand)
export class CreateRiskHandler
  implements ICommandHandler<CreateRiskCommand, any | object>
{
  async execute(command: CreateRiskCommand): Promise<any> {
    return;
  }
}
