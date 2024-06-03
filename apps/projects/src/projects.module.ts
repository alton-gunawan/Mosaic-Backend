import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { databaseProviders } from './providers/database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { ListProjectHandler } from './application/queries/handlers/list-project.handler';
import { CreateProjectHandler } from './application/command/handlers/create-project.handler';
import { UpdateProjectHandler } from './application/command/handlers/update-project.handler';
import { DeleteProjectHandler } from './application/command/handlers/delete-project.handler';
import { ProjectMembers } from './entity/project-members.entity';

const QueryHandlers = [ListProjectHandler];
const CommandHandlers = [
  CreateProjectHandler,
  UpdateProjectHandler,
  DeleteProjectHandler,
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Project, ProjectMembers]), databaseProviders],
  controllers: [ProjectsController],
  providers: [...QueryHandlers, ...CommandHandlers],
})
export class ProjectsModule {}
