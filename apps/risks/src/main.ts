import { NestFactory } from '@nestjs/core';
import { RisksModule } from './risks.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RisksModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:3005',
        package: 'risk',
        protoPath: join(__dirname, '/protos/risk.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
