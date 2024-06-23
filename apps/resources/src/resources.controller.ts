import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateResourceGroupRequest,
  CreateResourceRequest,
  DeleteResourceGroupRequest,
  DeleteResourceRequest,
  ResourceGroupResponse,
  ResourceResponse,
  UpdateResourceGroupRequest,
  UpdateResourceRequest,
  ListResourcesRequest,
  UpdateTaskResourceAllocationRequest,
  ListResourceGroupsRequest,
} from './protos/resource';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateResourceCommand } from './application/command/impl/create-resource.command';
import { UpdateResourceCommand } from './application/command/impl/update-resource.command';
import { DeleteResourceCommand } from './application/command/impl/delete-resource.command';
import { AssignResourceCommand } from './application/command/impl/assign-resource.command';
import { CreateResourceGroupCommand } from './application/command/impl/create-resource-group.command';
import { UpdateResourceGroupCommand } from './application/command/impl/update-resource-group.command';
import { GetResourceGroupByCriteriaQuery } from './application/queries/impl/get-resource-group-by-criteria.handler';
import { DeleteResourceGroupCommand } from './application/command/impl/delete-resource-group.command';
import { ListResourceQuery } from './application/queries/impl/get-resource-by-criteria.query';

@Controller()
export class ResourcesController {
  private readonly logger = new Logger(ResourcesController.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('ResourcesService', 'ListResources')
  async findAll(listResourcesDto: ListResourcesRequest) {
    try {
      const { id, resourceGroupId, taskId, projectId, limit, offset } =
        listResourcesDto;

      const result = await this.queryBus.execute(
        new ListResourceQuery(
          id,
          resourceGroupId,
          taskId,
          projectId,
          limit,
          offset,
        ),
      );

      Logger.log('ResourcesService:ListResources()');
      Logger.log(result);

      return ResourceResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error: any) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error retrieving project data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'CreateResource')
  async create(createResourceDto: CreateResourceRequest) {
    try {
      const { name, cost, unit, unitQuantity, resourceGroupId, projectId } =
        createResourceDto;

      const result = await this.commandBus.execute(
        new CreateResourceCommand(
          name,
          cost,
          unitQuantity,
          unit,
          resourceGroupId,
          projectId,
        ),
      );

      return ResourceResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error: any) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error creating resource data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'UpdateResource')
  async update(updateResourceDto: UpdateResourceRequest) {
    try {
      const { id, name, cost, unitId, unitQuantity } = updateResourceDto;

      const result = await this.commandBus.execute(
        new UpdateResourceCommand(id, name, cost, unitId, unitQuantity),
      );

      return ResourceResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting resource data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'DeleteResource')
  async remove(deleteResourceDto: DeleteResourceRequest) {
    try {
      const { id } = deleteResourceDto;

      const result = await this.commandBus.execute(
        new DeleteResourceCommand(id),
      );

      return ResourceResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting resource data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'UpdateTaskResourceAllocation')
  async updateTaskResourceAllocation(
    updateTaskResourceAllocationDto: UpdateTaskResourceAllocationRequest,
  ) {
    try {
      const { resourceId, taskId, unit } = updateTaskResourceAllocationDto;

      const result = await this.commandBus.execute(
        new AssignResourceCommand(resourceId, taskId, unit),
      );

      return ResourceResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting resource data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'ListResourceGroups')
  async listResourceGroups(listResourceGroupsDto: ListResourceGroupsRequest) {
    try {
      const { id, projectId } = listResourceGroupsDto;

      const result = await this.queryBus.execute(
        new GetResourceGroupByCriteriaQuery(id, projectId),
      );

      return ResourceGroupResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting resource data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'CreateResourceGroup')
  async createResourceGroup(
    createResourceGroupDto: CreateResourceGroupRequest,
  ) {
    try {
      const { name, description, projectId } = createResourceGroupDto;

      const result = await this.commandBus.execute(
        new CreateResourceGroupCommand(name, description, projectId),
      );

      return ResourceGroupResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting resource data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'UpdateResourceGroup')
  async updateResourceGroup(
    updateResourceGroupDto: UpdateResourceGroupRequest,
  ) {
    try {
      const { id, name, description } = updateResourceGroupDto;

      const result = await this.commandBus.execute(
        new UpdateResourceGroupCommand(id, name, description),
      );

      return ResourceGroupResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting resource data',
        },
      });
    }
  }

  @GrpcMethod('ResourcesService', 'DeleteResourceGroup')
  async deleteResourceGroup(
    deleteResourceGroupDto: DeleteResourceGroupRequest,
  ) {
    try {
      const { id } = deleteResourceGroupDto;

      const result = await this.commandBus.execute(
        new DeleteResourceGroupCommand(id),
      );

      return ResourceGroupResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return ResourceResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting resource data',
        },
      });
    }
  }
}
