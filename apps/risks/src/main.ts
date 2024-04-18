import { NestFactory } from '@nestjs/core';
import { RisksModule } from './risks.module';

async function bootstrap() {
  const app = await NestFactory.create(RisksModule);
  await app.listen(3000);
}
bootstrap();
