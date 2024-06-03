import { ICommand } from '@nestjs/cqrs';
import { TaskPriority, TaskStatus } from 'apps/tasks/src/protos/task';

export class UpdateTaskCommand implements ICommand {
  constructor(
    public readonly id: number,
    public name: string,
    public featuredImage: string,
    public description: string,
    public status: TaskStatus,
    public priority: TaskPriority,
    public startDate: Date,
    public duration: number,
    public taskColumnId: number,
    public predecessor: string,
    public order: number,
  ) {}
}
