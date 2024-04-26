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
  Query,
} from '@nestjs/common';
import {
  FindAllProjectsDto,
  ProjectsService,
  UpdateProjectDto,
} from '../protos/project';
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
  public async listProject(
    @Query() findAllProjectDto?: FindAllProjectsDto,
  ): Promise<any> {
    return await this.projectsService.FindAllProjects({
      ...findAllProjectDto,
    });
  }

  @Get(':id')
  public async findProject(@Param('id') id?: string): Promise<any> {
    return await this.projectsService.FindOneProject({
      id: +id,
    });
  }

  @Post()
  public async create(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<any> {
    const response = await this.projectsService.CreateProject({
      ...createProjectDto,
    });

    return response;
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
