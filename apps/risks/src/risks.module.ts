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
import { Issue } from './entity/issue.entity';
import { CreateIssueHandler } from './application/command/handlers/create-issue.handler';
import { UpdateIssueHandler } from './application/command/handlers/update-issue.handler';
import { DeleteIssueHandler } from './application/command/handlers/delete-issue.handler';
import { ListIssueHandler } from './application/queries/handlers/list-issues.handler';

const QueryHandlers = [ListRiskHandler, ListIssueHandler];
const CommandHandlers = [
  CreateRiskHandler,
  UpdateRiskHandler,
  DeleteRiskHandler,
  CreateIssueHandler,
  UpdateIssueHandler,
  DeleteIssueHandler,
];
const EventHandlers = [];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Risk, Issue]),
    databaseProviders,
  ],
  controllers: [RisksController],
  providers: [...CommandHandlers, ...QueryHandlers, ...EventHandlers],
})
export class RisksModule {}
