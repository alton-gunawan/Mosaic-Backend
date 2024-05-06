import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CloseRiskCommand } from '../impl/close-risk.command';

@CommandHandler(CloseRiskCommand)
export class CloseRiskHandler
  implements ICommandHandler<CloseRiskCommand, any | object>
{
  async execute(command: CloseRiskCommand): Promise<any> {
    return;
  }
}
