import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { FindAllTasksQueryHandler } from './application/queries/handlers/find-all-tasks.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateTaskHandler } from './application/command/handlers/create-task.handler';
import { UpdateTaskHandler } from './application/command/handlers/update-task.handler';
import { DeleteTaskHandler } from './application/command/handlers/delete-task.handler';
import { CreateTaskColumnHandler } from './application/command/handlers/create-task-column.handler';
import { FindAllTaskColumnQueryHandler } from './application/queries/handlers/find-all-task-column.handler';
import { DeleteTaskColumnHandler } from './application/command/handlers/delete-task-column.handler';

const application = [
  FindAllTasksQueryHandler,
  CreateTaskHandler,
  UpdateTaskHandler,
  DeleteTaskHandler,
  FindAllTaskColumnQueryHandler,
  CreateTaskColumnHandler,
  DeleteTaskColumnHandler,
];

@Module({
  imports: [CqrsModule],
  controllers: [TasksController],
  providers: [TasksService, ...application],
})
export class TasksModule {}
