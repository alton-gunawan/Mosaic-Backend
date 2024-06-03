import { ICommand } from '@nestjs/cqrs';

export class UpdateProjectCommand implements ICommand {
  constructor(
    public readonly id: number,
    public name: string,
    public description: string,
    public featuredImage: string,
    public startDate: Date,
    public endDate: Date,
  ) {}
}
