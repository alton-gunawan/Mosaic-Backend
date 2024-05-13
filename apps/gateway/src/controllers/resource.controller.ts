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
  AssignResourceRequest,
  CreateResourceRequest,
  FindAllResourcesRequest,
  ResourcesService,
  UpdateResourceRequest,
} from '../protos/resource';
import { ClientGrpc } from '@nestjs/microservices';

@Controller({
  version: '1',
  path: 'resources',
})
export class ResourcesController implements OnModuleInit {
  private readonly logger = new Logger(ResourcesController.name);
  private resourcesService: ResourcesService;

  constructor(
    @Inject('RESOURCE_PACKAGE')
    private readonly resourcePackageClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.resourcesService =
      this.resourcePackageClient.getService('ResourcesService');
  }

  @Get()
  public async listResource(
    @Query() findAllResourceDto?: FindAllResourcesRequest,
  ): Promise<any> {
    const taskId =
      JSON.parse(findAllResourceDto?.taskId as unknown as string) || [];

    return new Promise((resolve) => {
      resolve(
        this.resourcesService.FindAllResources({
          ...findAllResourceDto,
          taskId: taskId,
        }),
      );
    });
  }

  @Post()
  public async create(@Body() createResourceDto: CreateResourceRequest) {
    return await this.resourcesService.CreateResource({
      ...createResourceDto,
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateResourceDto: UpdateResourceRequest,
  ) {
    return await this.resourcesService.UpdateResource({
      id: +id,
      ...updateResourceDto,
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.resourcesService.DeleteResource({
      id: +id,
    });
  }

  @Post(':id/assignments')
  public async assignResourceToTask(
    @Body() assignResourceDto: AssignResourceRequest,
  ) {
    return await this.resourcesService.AssignResource({
      ...assignResourceDto,
    });
  }

  @Delete(':resourceId/assignments/:resourceAllocationId')
  public async unassignResource(
    @Param('resourceId') resourceId: string,
    @Param('resourceAllocationId') resourceAllocationId: string,
  ) {
    return await this.resourcesService.UnassignResource({
      id: +resourceAllocationId,
    });
  }
}
