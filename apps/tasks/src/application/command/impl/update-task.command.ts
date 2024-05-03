import { ICommand } from '@nestjs/cqrs';

export class UpdateTaskCommand implements ICommand {
  constructor(
    public id: string,
    public name?: string,
    public featuredImage?: string,
    public description?: string,
    public status?: string,
    public priority?: string,
    public startDate?: number,
    public endDate?: number,
    public taskColumnId?: string,
    public subtasks?: Array<any>,
    public assignees?: Array<string>,
    public dependencies?: Array<any>,
  ) {}
}
