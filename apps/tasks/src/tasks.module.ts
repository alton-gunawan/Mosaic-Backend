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
import { databaseProviders } from './providers/database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskGroup } from './entity/task-group.entity';
import { Task } from './entity/task.entity';
import { TaskDependency } from './entity/task-dependency.entity';
import { TaskAssignees } from './entity/task-assignees.entity';
import { TaskUpdatedHandler } from './application/events/handlers/task-updated.handler';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

const QueryHandlers = [FindAllTasksQueryHandler, FindAllTaskColumnQueryHandler];
const CommandHandlers = [
  CreateTaskHandler,
  UpdateTaskHandler,
  DeleteTaskHandler,
  CreateTaskColumnHandler,
  DeleteTaskColumnHandler,
];
const EventHandlers = [TaskUpdatedHandler];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Task, TaskGroup, TaskDependency, TaskAssignees]),
    databaseProviders,
    ClientsModule.register([
      {
        name: 'RESOURCE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'resources-service:3004',
          package: 'resource',
          protoPath: join(__dirname, '/protos/resource.proto'),
        },
      },
    ]),
  ],
  controllers: [TasksController],
  providers: [
    TasksService,
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
  ],
})
export class TasksModule {}
