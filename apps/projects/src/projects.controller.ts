import { Controller, Get, HttpStatus, HttpException } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateProjectDto,
  FindAllProjectsDto,
  FindOneProjectDto,
  ProjectResponse,
  ProjectsResponse,
  RemoveProjectDto,
  UpdateProjectDto,
} from 'apps/gateway/src/protos/project';
import { Project } from './entity/project.entity';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @GrpcMethod('ProjectsService', 'FindOneProject')
  async findOne(findOneProjectDto?: FindOneProjectDto) {
    try {
      const project: object = await this.projectsService.findOne(
        findOneProjectDto.id,
      );

      const response = ProjectResponse.create({
        message: 'func:FindOneProject()',
        statusCode: project ? HttpStatus.OK : HttpStatus.NOT_FOUND,
        data: project as Project,
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

  @GrpcMethod('ProjectsService', 'FindAllProjects')
  async findAll(findAllProjectDto?: FindAllProjectsDto) {
    try {
      const projects: Array<object> = await this.projectsService.findAll({
        ...findAllProjectDto,
      });

      const response = ProjectsResponse.create({
        message: 'func:FindAllProjects()',
        statusCode: projects.length > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND,
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

  @GrpcMethod('ProjectsService', 'ListProjectByUser')
  async listProjectByUser(userId: string) {
    try {
      const projects: any = await this.projectsService.findByUser(userId);

      const response = ProjectsResponse.create({
        message: 'func:ListProjectByUser()',
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

  @GrpcMethod('ProjectsService', 'UpdateProject')
  async update(updateProjectDto: UpdateProjectDto) {
    try {
      const project: any = await this.projectsService.update(
        updateProjectDto.id,
        updateProjectDto,
      );

      const response = ProjectResponse.create({
        message: 'func:UpdateProject()',
        statusCode: HttpStatus.OK,
        data: project as Project,
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

  @GrpcMethod('ProjectsService', 'GetMember')
  async listMember(findOneProjectDto?: FindOneProjectDto) {
    try {
      const project: object = await this.projectsService.findOne(
        findOneProjectDto.id,
      );

      const response = ProjectResponse.create({
        message: 'func:FindOneProject()',
        statusCode: project ? HttpStatus.OK : HttpStatus.NOT_FOUND,
        data: project as Project,
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
