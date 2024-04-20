import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { LoggerModule } from 'nestjs-pino';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProjectsController } from './controllers/project.controller';

@Module({
  imports: [
    LoggerModule.forRoot(),
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
    ]),
  ],
  controllers: [GatewayController, ProjectsController],
  providers: [GatewayService],
})
export class GatewayModule {}
