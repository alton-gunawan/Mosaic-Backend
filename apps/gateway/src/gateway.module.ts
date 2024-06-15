import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProjectsController } from './controllers/project.controller';
import { TasksController } from './controllers/task.controller';
import { ResourcesController } from './controllers/resource.controller';
import { ResourceGroupsController } from './controllers/resource-group.controller';
import { TaskGroupController } from './controllers/task-group.controller';
import { RisksController } from './controllers/risk.controller';
import { IssuesController } from './controllers/issue.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROJECT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'projects-service:3002',
          package: 'packages.project',
          protoPath: join(__dirname, '/protos/project.proto'),
        },
      },
      {
        name: 'TASK_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'tasks-service:3003',
          package: 'packages.task',
          protoPath: join(__dirname, '/protos/task.proto'),
        },
      },
      {
        name: 'RESOURCE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'resources-service:3004',
          package: 'packages.resource',
          protoPath: join(__dirname, '/protos/resource.proto'),
        },
      },
      {
        name: 'RISK_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'risks-service:3005',
          package: 'packages.risk',
          protoPath: join(__dirname, '/protos/risk.proto'),
        },
      },
    ]),
  ],
  controllers: [
    ProjectsController,
    TasksController,
    ResourcesController,
    ResourceGroupsController,
    TaskGroupController,
    RisksController,
    IssuesController,
  ],
  providers: [],
})
export class GatewayModule {}
