import { ICommand } from '@nestjs/cqrs';

export class CreateProjectCommand implements ICommand {
  constructor(
    public name: string,
    public description: string,
    public featuredImage: string,
    public createdBy: string,
    public startDate: Date,
    public endDate: Date,
  ) {}
}
