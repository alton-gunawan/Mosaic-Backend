import { IEvent } from '@nestjs/cqrs';

export class TaskUpdatedEvent implements IEvent {
  constructor(
    public readonly resourceId: number,
    public readonly taskId: number,
    public readonly unit: number,
  ) {}
}
