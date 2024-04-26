import { Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

type CreateGroupOptions = Readonly<{
  title: string;
  limit: number;
}>;

export class GroupFactory {
  @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;
}
