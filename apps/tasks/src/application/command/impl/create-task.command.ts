import { ICommand } from '@nestjs/cqrs';

export class CreateTaskCommand implements ICommand {
  constructor(
    public name: string,
    public featuredImage: string,
    public description: string,
    public status: string,
    public priority: string,
    public startDate: string,
    public endDate: string,
    public createdBy: string,
    public projectId: string,
    public taskColumnId: string,
    public predecessor: string,
  ) {}
}
