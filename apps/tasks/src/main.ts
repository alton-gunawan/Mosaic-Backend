import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TasksModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:3003',
        package: 'packages.task',
        protoPath: join(__dirname, '/protos/task.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
