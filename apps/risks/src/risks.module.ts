import { Module } from '@nestjs/common';
import { RisksController } from './risks.controller';
import { RisksService } from './risks.service';

@Module({
  imports: [],
  controllers: [RisksController],
  providers: [RisksService],
})
export class RisksModule {}
