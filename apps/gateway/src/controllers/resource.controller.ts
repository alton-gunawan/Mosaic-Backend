import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Logger,
  OnModuleInit,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CreateResourceRequest,
  ResourcesService,
  UpdateResourceRequest,
  ListResourcesRequest,
  UpdateTaskResourceAllocationRequest_Operation,
  UpdateTaskResourceAllocationRequest,
  ResourceResponse,
} from '../protos/resource';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, catchError, from, map } from 'rxjs';

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
    @Query() listResourcesDto?: ListResourcesRequest,
  ): Promise<any> {
    Logger.log('listResourcesDto:first()');
    Logger.log(listResourcesDto);

    return new Promise((resolve, reject) => {
      from(
        this.resourcesService.ListResources({
          ...listResourcesDto,
          taskId: listResourcesDto.taskId
            ? Array.isArray(listResourcesDto?.taskId)
              ? listResourcesDto.taskId
              : [listResourcesDto.taskId]
            : undefined,
        }),
      )
        .pipe(
          catchError((error: Error, caught: Observable<ResourceResponse>) => {
            throw error;
          }),
        )
        .pipe(map((result) => result?.data?.data))
        .subscribe({
          next: (resourceResult) => {
            Logger.log('resourceResult data:');
            Logger.log(resourceResult);
            resolve(resourceResult || []);
          },
          error: (error) => {
            reject(error);
          },
        });
    }).catch((error) => {
      throw new HttpException(
        error.message || 'Error creating task...',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
  }

  @Post()
  public async create(@Body() createResourceDto: CreateResourceRequest) {
    return new Promise((resolve, reject) => {
      from(
        this.resourcesService.CreateResource({
          ...createResourceDto,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe({
          next: (resourceResult) => {
            resolve(
              resourceResult instanceof Array && resourceResult.length > 0
                ? resourceResult[0]
                : resourceResult,
            );
          },
          error: (error) => {
            reject(error);
          },
        });
    }).catch((error) => {
      throw new HttpException(
        error.message || 'Error creating resource...',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateResourceDto: UpdateResourceRequest,
  ) {
    return new Promise((resolve) => {
      from(
        this.resourcesService.UpdateResource({
          ...updateResourceDto,
          id: id,
        }),
      )
        .pipe(map((result) => result?.data?.data))
        .subscribe((resourceResult) => {
          resolve(resourceResult[0]);
        });
    });
  }

  @Delete(':id')
  public async remove(@Param('id') id: number) {
    return new Promise((resolve) => {
      from(
        this.resourcesService.DeleteResource({
          id: +id,
        }),
      ).subscribe((resourceResult) => {
        resolve(resourceResult);
      });
    });
  }

  @Post(':id/assignments')
  public async assignResourceToTask(
    @Body() assignResourceDto: UpdateTaskResourceAllocationRequest,
  ) {
    return await this.resourcesService.UpdateTaskResourceAllocation({
      ...assignResourceDto,
    });
  }

  @Delete(':resourceId/assignments/:resourceAllocationId')
  public async unassignResource(
    @Param('resourceId') resourceId: string,
    @Param('resourceAllocationId') resourceAllocationId: string,
  ) {
    return await this.resourcesService.UpdateTaskResourceAllocation({
      unit: undefined,
      resourceId: +resourceAllocationId,
      taskId: 0,
      operation: UpdateTaskResourceAllocationRequest_Operation.UNALLOCATE,
    });
  }
}
