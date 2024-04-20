import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectsService, UpdateProjectDto } from '../protos/project';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateProjectDto } from '../interfaces/create-project.dto';

@Controller({
  version: '1',
  path: 'projects',
})
export class ProjectsController implements OnModuleInit {
  private readonly logger = new Logger(ProjectsController.name);
  private projectsService: ProjectsService;

  constructor(
    @Inject('PROJECT_PACKAGE')
    private readonly projectPackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.projectsService =
      this.projectPackageClient.getService('ProjectsService');
  }

  @Get()
  public async listProject(): Promise<any> {
    return await this.projectsService.FindAllProjects({});
  }

  @Post()
  public async create(
    @Body() createProjectDTO: CreateProjectDto,
  ): Promise<any> {
    this.logger.debug(createProjectDTO);

    return await this.projectsService.CreateProject({
      name: createProjectDTO.name,
      description: createProjectDTO.description,
      startDate: createProjectDTO.startDate,
      endDate: createProjectDTO.endDate,
      createdBy: createProjectDTO.createdBy,
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    const { id: projectId, ...data } = updateProjectDto;

    return await this.projectsService.UpdateProject({
      id: +id,
      ...data,
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<any> {
    return await this.projectsService.RemoveProject({ id: +id });
  }
}
