import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateProjectRequest,
  DeleteProjectRequest,
  ListProjectsRequest,
  Project,
  ProjectResponse,
  UpdateProjectRequest,
} from './protos/project';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListProjectQuery } from './application/queries/impl/list-project.query';
import { Timestamp } from './protos/google/protobuf/timestamp';
import * as moment from 'moment';
import { CreateProjectCommand } from './application/command/impl/create-project.command';
import { DeleteProjectCommand } from './application/command/impl/delete-project.command';
import { UpdateProjectCommand } from './application/command/impl/update-project.command';

@Controller()
export class ProjectsController {
  private readonly logger = new Logger(ProjectsController.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('ProjectsService', 'ListProjects')
  async findAll(
    listProjectsDto?: ListProjectsRequest,
  ): Promise<ProjectResponse> {
    try {
      const { createdBy, id, limit, offset } = listProjectsDto;

      const result = await this.queryBus.execute(
        new ListProjectQuery(id, createdBy, limit, offset),
      );

      const formattedResponse =
        result?.map((projectsData: Project) => {
          const startDate = projectsData?.startDate
            ? Timestamp.create({
                seconds: moment(projectsData?.startDate).unix(),
                nanos: moment(projectsData?.startDate).unix() * 1000000,
              })
            : undefined;

          const endDate = projectsData?.endDate
            ? Timestamp.create({
                seconds: moment(projectsData?.endDate).unix(),
                nanos: moment(projectsData?.endDate).unix() * 1000000,
              })
            : undefined;

          return {
            ...projectsData,
            startDate: startDate,
            endDate: endDate,
          };
        }) || null;

      return ProjectResponse.create({
        data: {
          data: formattedResponse || undefined,
        },
      });
    } catch (error: any) {
      return ProjectResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error retrieving project data',
        },
      });
    }
  }

  @GrpcMethod('ProjectsService', 'CreateProject')
  async create(createProjectDto: CreateProjectRequest) {
    try {
      const { name, featuredImage, createdBy, description } = createProjectDto;

      const result = await this.commandBus.execute(
        new CreateProjectCommand(
          name,
          description,
          featuredImage,
          createdBy,
          createProjectDto?.startDate &&
          typeof createProjectDto.startDate === 'object'
            ? moment
                .unix((createProjectDto?.startDate as any)?.seconds)
                ?.toDate()
            : undefined,
          createProjectDto?.endDate &&
          typeof createProjectDto.endDate === 'object'
            ? moment.unix((createProjectDto?.endDate as any)?.seconds)?.toDate()
            : undefined,
        ),
      );

      return ProjectResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error: any) {
      return ProjectResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error creating project data',
        },
      });
    }
  }

  @GrpcMethod('ProjectsService', 'UpdateProject')
  async update(updateProjectDto: UpdateProjectRequest) {
    try {
      const { id, name, featuredImage, description, startDate, endDate } =
        updateProjectDto;

      const result = await this.commandBus.execute(
        new UpdateProjectCommand(
          id,
          name || undefined,
          description || undefined,
          featuredImage || undefined,
          startDate || undefined,
          endDate || undefined,
        ),
      );

      return ProjectResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error: any) {
      return ProjectResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error creating project data',
        },
      });
    }
  }

  @GrpcMethod('ProjectsService', 'DeleteProject')
  public async remove(removeProjectDto: DeleteProjectRequest): Promise<any> {
    try {
      const { id } = removeProjectDto;

      await this.commandBus.execute(new DeleteProjectCommand(id));

      return {};
    } catch (error: any) {
      return ProjectResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error creating project data',
        },
      });
    }
  }
}
