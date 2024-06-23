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
  ListProjectsRequest,
  UpdateProjectRequest,
  ProjectsService,
  CreateProjectRequest,
} from '../protos/project';
import { ClientGrpc } from '@nestjs/microservices';
import { from, map, take } from 'rxjs';
import { Timestamp } from 'google/protobuf/timestamp';
import * as moment from 'moment';

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
    @Query() listProjectsDto?: ListProjectsRequest,
  ): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.projectsService.ListProjects({
          ...listProjectsDto,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((projectResult) => {
          const formattedResponse = projectResult?.map((projectsData) => ({
            ...projectsData,
            startDate: projectsData?.startDate
              ? moment.unix((projectsData?.startDate as any)?.seconds).toDate()
              : undefined,
            endDate: projectsData?.endDate
              ? moment.unix((projectsData?.endDate as any)?.seconds).toDate()
              : undefined,
          }));

          resolve(formattedResponse);
        });
    });
  }

  @Post()
  public async create(
    @Body() createProjectDto: CreateProjectRequest,
  ): Promise<any> {
    Logger.log('createProjectDto:func()');
    Logger.log(createProjectDto);

    const startDate = Timestamp.create({
      seconds: Math.floor(
        new Date(createProjectDto?.startDate).getTime() / 1000,
      ),
      nanos: (new Date(createProjectDto?.startDate).getTime() % 1000) * 1e6,
    });
    const endDate = Timestamp.create({
      seconds: Math.floor(new Date(createProjectDto?.endDate).getTime() / 1000),
      nanos: (new Date(createProjectDto?.endDate).getTime() % 1000) * 1e6,
    });

    return new Promise((resolve) => {
      from(
        this.projectsService.CreateProject({
          ...createProjectDto,
          startDate:
            (createProjectDto?.startDate && (startDate as any)) || undefined,
          endDate: (createProjectDto?.endDate && (endDate as any)) || undefined,
        }),
      )
        .pipe(take(1))
        .pipe(map((result) => result?.data?.data))
        .subscribe((projectResult) => {
          Logger.log('projectResult: ');
          Logger.log(projectResult);

          resolve(projectResult[0]);
        });
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectRequest,
  ) {
    const { id: projectId, ...data } = updateProjectDto;

    return new Promise((resolve) => {
      from(
        this.projectsService.UpdateProject({
          id: +id,
          ...data,
        }),
      )
        .pipe(take(1))
        .pipe(map((result) => result?.data?.data))
        .subscribe((projectResult) => {
          Logger.log('update:projectResult()');
          Logger.log(projectResult);

          resolve(projectResult[0]);
        });
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<any> {
    return new Promise((resolve) => {
      from(this.projectsService.DeleteProject({ id: +id })).subscribe(
        (deleteProjectResult) => {
          resolve(deleteProjectResult);
        },
      );
    });
  }

  @Post(':id/members')
  public async addMember(
    @Param('id') id: number,
    // @Body() addMemberDto: AddMemberRequest,
  ) {}

  @Put(':id/members')
  public async updateMember(
    @Param('id') id: number,
    // @Body() addMemberDto: UpdateMemberRequest,
  ) {}

  @Delete(':id/members')
  public async removeMember(
    @Param('id') id: number,
    // @Body() deleteProjectDto: RemoveMemberRequest,
  ) {}
}
