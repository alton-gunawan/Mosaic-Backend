import { ICommand } from '@nestjs/cqrs';
import { Duration } from 'apps/tasks/src/protos/google/protobuf/duration';
import {
  CreateTaskRequest,
  Subtask,
  TaskPriority,
  TaskStatus,
} from 'apps/tasks/src/protos/task';

export class CreateTaskCommand implements ICommand, CreateTaskRequest {
  constructor(
    public name: string,
    public featuredImage: string,
    public description: string,
    public status: TaskStatus,
    public priority: TaskPriority,
    public startDate: Date | undefined,
    public duration: Duration | undefined,
    public predecessor: string,
    public subtasks: Subtask[],
    public order: number,
    public createdBy: string,
    public assignedTo: string[],
    public issueId: number | undefined,
    public taskColumnId: number,
    public projectId: number,
  ) {}
}
