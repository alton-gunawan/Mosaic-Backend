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
  CreateResourceGroupRequest,
  FindAllResourceGroupsByCriteriaRequest,
  ResourcesService,
  UpdateResourceGroupRequest,
} from '../protos/resource';
import { ClientGrpc } from '@nestjs/microservices';

@Controller({
  version: '1',
  path: 'resources-group',
})
export class ResourceGroupsController implements OnModuleInit {
  private readonly logger = new Logger(ResourceGroupsController.name);
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
    @Query() findAllResourceGroupDto?: FindAllResourceGroupsByCriteriaRequest,
  ): Promise<any> {
    return await this.resourcesService.FindAllResourceGroupsByCriteria({
      ...findAllResourceGroupDto,
    });
  }

  @Post()
  public async create(
    @Body() createResourceGroupDto: CreateResourceGroupRequest,
  ) {
    return await this.resourcesService.CreateResourceGroup({
      ...createResourceGroupDto,
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateResourceGroupDto: UpdateResourceGroupRequest,
  ) {
    return await this.resourcesService.UpdateResourceGroup({
      id: +id,
      ...updateResourceGroupDto,
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this.resourcesService.DeleteResourceGroup({
      id: +id,
    });
  }
}
