import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProjectsController } from './controllers/project.controller';
import { TasksController } from './controllers/task.controller';

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
    ]),
  ],
  controllers: [GatewayController, ProjectsController, TasksController],
  providers: [GatewayService],
})
export class GatewayModule {}
