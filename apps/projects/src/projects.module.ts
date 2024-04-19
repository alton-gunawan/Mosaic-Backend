import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { databaseProviders } from './providers/database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), databaseProviders],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
