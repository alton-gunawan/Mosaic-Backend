import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateProjectDto,
  ProjectResponse,
  ProjectsResponse,
  RemoveProjectDto,
} from 'apps/gateway/src/protos/project';
import { Project } from './entity/project.entity';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @GrpcMethod('ProjectsService', 'FindAllProjects')
  async findAll() {
    try {
      const projects: any = await this.projectsService.findAll();

      const response = ProjectsResponse.create({
        message: 'func:FindAllProjects()',
        statusCode: HttpStatus.OK,
        data: projects as Project[],
      });

      return response;
    } catch (error: any) {
      const response = ProjectResponse.create({
        message: error.message,
        statusCode: error.status,
      });

      return response;
    }
  }

  @GrpcMethod('ProjectsService', 'CreateProject')
  async create(createProjectDto: CreateProjectDto) {
    try {
      const projects: any = await this.projectsService.create(createProjectDto);

      const response = ProjectsResponse.create({
        message: 'func:CreateProject()',
        statusCode: HttpStatus.OK,
        data: projects as Project[],
      });

      return response;
    } catch (error: any) {
      const response = ProjectResponse.create({
        message: error.message,
        statusCode: error.status,
      });

      return response;
    }
  }

  @GrpcMethod('ProjectsService', 'RemoveProject')
  public async remove(removeProjectDto: RemoveProjectDto): Promise<any> {
    try {
      const result: any = await this.projectsService.remove(
        removeProjectDto.id,
      );

      if (!result)
        throw new HttpException('Project Not Found', HttpStatus.NOT_FOUND);

      const response = ProjectResponse.create({
        message: 'func:RemoveProject()',
        statusCode: HttpStatus.OK,
      });

      return response;
    } catch (error: any) {
      const response = ProjectResponse.create({
        message: error.message,
        statusCode: error.status,
      });

      return response;
    }
  }

  @Get('/health')
  healthCheck(): string {
    return JSON.stringify({
      status: 'up',
    });
  }
}
