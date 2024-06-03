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
  ResourcesService,
  UpdateResourceGroupRequest,
  ListResourceGroupsRequest,
} from '../protos/resource';
import { ClientGrpc } from '@nestjs/microservices';
import { from, map } from 'rxjs';

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
  public async listResourceGroups(
    @Query() listResourceGroupsDto?: ListResourceGroupsRequest,
  ): Promise<any> {
    return new Promise((resolve) => {
      from(
        this.resourcesService.ListResourceGroups({
          ...listResourceGroupsDto,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((resourceGroupResult) => {
          resolve(resourceGroupResult);
        });
    });
  }

  @Post()
  public async create(
    @Body() createResourceGroupDto: CreateResourceGroupRequest,
  ) {
    return new Promise((resolve) => {
      from(
        this.resourcesService.CreateResourceGroup({
          ...createResourceGroupDto,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((resourceGroupResult) => {
          resourceGroupResult
            ? resolve(resourceGroupResult[0])
            : resolve(resourceGroupResult);
        });
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateResourceGroupDto: UpdateResourceGroupRequest,
  ) {
    return new Promise((resolve) => {
      from(
        this.resourcesService.UpdateResourceGroup({
          ...updateResourceGroupDto,
          id: id,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((resourceGroupResult) => {
          resourceGroupResult
            ? resolve(resourceGroupResult[0])
            : resolve(resourceGroupResult);
        });
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: number) {
    return new Promise((resolve) => {
      from(
        this.resourcesService.DeleteResourceGroup({
          id: +id,
        }),
      ).subscribe((resourceGroupResult) => {
        resourceGroupResult
          ? resolve(resourceGroupResult[0])
          : resolve(resourceGroupResult);
      });
    });
  }
}
