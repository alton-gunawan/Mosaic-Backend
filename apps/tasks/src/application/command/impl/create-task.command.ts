import { ICommand } from '@nestjs/cqrs';

export class CreateTaskCommand implements ICommand {
  constructor(
    public name: string,
    public featuredImage: string,
    public description: string,
    public status: string,
    public priority: string,
    public startDate: number,
    public duration: number,
    public createdBy: string,
    public projectId: number,
    public taskColumnId: number,
    public predecessor: string,
  ) {}
}
