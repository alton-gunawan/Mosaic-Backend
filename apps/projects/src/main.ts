import { NestFactory } from '@nestjs/core';
import { ProjectsModule } from './projects.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { protobufPackage } from './protos/project';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProjectsModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:3002',
        package: protobufPackage,
        protoPath: join(__dirname, '/protos/project.proto'),
        loader: {
          longs: Number,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
