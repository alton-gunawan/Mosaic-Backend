import { Module } from '@nestjs/common';
import { RisksController } from './risks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Risk } from './entity/risk.entity';
import { databaseProviders } from './providers/database.providers';
import { CreateRiskHandler } from './application/command/handlers/create-risk.handler';
import { UpdateRiskHandler } from './application/command/handlers/update-risk.handler';
import { DeleteRiskHandler } from './application/command/handlers/delete-risk.handler';
import { ListRiskHandler } from './application/queries/handlers/list-risks.handler';
import { CqrsModule } from '@nestjs/cqrs';

const QueryHandlers = [ListRiskHandler];
const CommandHandlers = [
  CreateRiskHandler,
  UpdateRiskHandler,
  DeleteRiskHandler,
];
const EventHandlers = [];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Risk]), databaseProviders],
  controllers: [RisksController],
  providers: [...CommandHandlers, ...QueryHandlers, ...EventHandlers],
})
export class RisksModule {}
