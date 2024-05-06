import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProjectsController } from './controllers/project.controller';
import { TasksController } from './controllers/task.controller';
import { ResourcesController } from './controllers/resource.controller';
import { ResourceGroupsController } from './controllers/resource-group.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROJECT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'projects-service:3002',
          package: 'project',
          protoPath: join(__dirname, '/protos/project.proto'),
        },
      },
      {
        name: 'TASK_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'tasks-service:3003',
          package: 'task',
          protoPath: join(__dirname, '/protos/task.proto'),
        },
      },
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
  controllers: [
    GatewayController,
    ProjectsController,
    TasksController,
    ResourcesController,
    ResourceGroupsController,
  ],
  providers: [GatewayService],
})
export class GatewayModule {}
