import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateRiskCommand } from '../impl/update-risk.command';

@CommandHandler(UpdateRiskCommand)
export class UpdateRiskHandler
  implements ICommandHandler<UpdateRiskCommand, any | object>
{
  async execute(command: UpdateRiskCommand): Promise<any> {
    return;
  }
}
