import { FindAllTasksRequest } from '../../../protos/task';

export class FindAllTasksQuery {
  constructor(
    public readonly id: string,
    public name: string,
    public featuredImage: string,
    public description: string,
    public status: string,
    public priority: string,
    public startDate: number,
    public endDate: number,
    public createdBy: string,
    public projectId: string,
    public taskColumnId: string,
  ) {}
}
