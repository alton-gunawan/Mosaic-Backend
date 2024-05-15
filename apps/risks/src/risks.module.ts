import { Module } from '@nestjs/common';
import { RisksController } from './risks.controller';
import { RisksService } from './risks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Risk } from './entity/risk.entity';
import { databaseProviders } from './providers/database.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Risk]), databaseProviders],
  controllers: [RisksController],
  providers: [RisksService],
})
export class RisksModule {}
