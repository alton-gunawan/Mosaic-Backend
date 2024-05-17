import { ICommand } from '@nestjs/cqrs';
import { Resources } from 'apps/tasks/src/protos/task';

export class UpdateTaskCommand implements ICommand {
  constructor(
    public readonly id: number,
    public name?: string,
    public featuredImage?: string,
    public description?: string,
    public priority?: string,
    public startDate?: Date,
    public duration?: number,
    public taskColumnId?: number,
    public resources?: Resources[],
    public predecessor?: string,
  ) {}
}
