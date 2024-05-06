import { NestFactory } from '@nestjs/core';
import { ResourcesModule } from './resources.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ResourcesModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:3004',
        package: 'resource',
        protoPath: join(__dirname, '/protos/resource.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
