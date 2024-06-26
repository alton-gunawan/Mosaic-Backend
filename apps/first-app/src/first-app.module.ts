import { Module } from '@nestjs/common';
import { FirstAppController } from './first-app.controller';
import { FirstAppService } from './first-app.service';
import { FirstAppService } from './first-app/first-app.service';

@Module({
  imports: [],
  controllers: [FirstAppController],
  providers: [FirstAppService],
})
export class FirstAppModule {}
