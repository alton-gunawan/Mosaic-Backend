import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { HttpException, HttpStatus, Inject } from '@nestjs/common';
import { CreateGroupCommand } from '../impl/create-group.command';

@CommandHandler(CreateGroupCommand)
export class CreateGroupHandler
  implements ICommandHandler<CreateGroupCommand, void>
{
  constructor(
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher,
  ) {}

  async execute(command: CreateGroupCommand): Promise<void> {}
}
