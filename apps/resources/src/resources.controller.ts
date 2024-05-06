import { Controller, Logger } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  AssignResourceRequest,
  CreateResourceGroupRequest,
  CreateResourceRequest,
  DeleteResourceGroupRequest,
  DeleteResourceRequest,
  FindAllResourceGroupsByCriteriaRequest,
  FindAllResourcesRequest,
  FindOneResourceRequest,
  ResourceGroupResponse,
  ResourceGroupsResponse,
  ResourceResponse,
  ResourcesResponse,
  UnassignResourceRequest,
  UpdateResourceGroupRequest,
  UpdateResourceRequest,
} from './protos/resource';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetResourceByIdQuery } from './application/queries/impl/get-resource-by-id.query';
import { GetResourceByCriteriaQuery } from './application/queries/impl/get-resource-by-criteria.query';
import { CreateResourceCommand } from './application/command/impl/create-resource.command';
import { UpdateResourceCommand } from './application/command/impl/update-resource.command';
import { DeleteResourceCommand } from './application/command/impl/delete-resource.command';
import { AssignResourceCommand } from './application/command/impl/assign-resource.command';
import { UnassignResourceCommand } from './application/command/impl/unassign-resource.command';
import { CreateResourceGroupCommand } from './application/command/impl/create-resource-group.command';
import { UpdateResourceGroupCommand } from './application/command/impl/update-resource-group.command';
import { GetResourceGroupByCriteriaQuery } from './application/queries/impl/get-resource-group-by-criteria.handler';
import { DeleteResourceGroupCommand } from './application/command/impl/delete-resource-group.command';

@Controller()
export class ResourcesController {
  private readonly logger = new Logger(ResourcesController.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('ResourcesService', 'FindOneResource')
  async findOne(findOneResourceDto: FindOneResourceRequest) {
    const response = await this.queryBus.execute(
      new GetResourceByIdQuery(findOneResourceDto.id),
    );

    return ResourceResponse.create({
      message: 'func:FindOneResource()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'FindAllResources')
  async findAll(findAllResourcesDto: FindAllResourcesRequest) {
    const response = await this.queryBus.execute(
      new GetResourceByCriteriaQuery(
        findAllResourcesDto?.id,
        findAllResourcesDto?.projectId,
      ),
    );
    
    return ResourcesResponse.create({
      message: 'func:FindAllResources()',
      statusCode: 200,
      data: response || [],
    });
  }

  @GrpcMethod('ResourcesService', 'CreateResource')
  async create(createResourceDto: CreateResourceRequest) {
    const { name, unit, projectId } = createResourceDto;

    const response = await this.commandBus.execute(
      new CreateResourceCommand(name, unit, projectId),
    );

    return ResourceResponse.create({
      message: 'func:CreateResource()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'UpdateResource')
  async update(updateResourceDto: UpdateResourceRequest) {
    const { id, name, unit } = updateResourceDto;

    const response = await this.commandBus.execute(
      new UpdateResourceCommand(id, name, unit),
    );

    return ResourceResponse.create({
      message: 'func:UpdateResource()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'DeleteResource')
  async remove(deleteResourceDto: DeleteResourceRequest) {
    const { id } = deleteResourceDto;

    const response = await this.commandBus.execute(
      new DeleteResourceCommand(id),
    );

    return ResourceResponse.create({
      message: 'func:DeleteResource()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'AssignResource')
  async assignResource(assignResourceDto: AssignResourceRequest) {
    const { projectId, resourceId, targetId, unit } = assignResourceDto;

    const response = await this.commandBus.execute(
      new AssignResourceCommand(resourceId, +targetId, unit, projectId),
    );

    return ResourceResponse.create({
      message: 'func:AssignResource()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'UnassignResource')
  async unassignResource(unassignResourceDto: UnassignResourceRequest) {
    const { id } = unassignResourceDto;

    const response = await this.commandBus.execute(
      new UnassignResourceCommand(id),
    );

    return ResourceResponse.create({
      message: 'func:UnassignResource()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'FindAllResourceGroupsByCriteria')
  async findAllResourceGroupsByCriteria(
    findAllResourceGroupsByCriteriaDto: FindAllResourceGroupsByCriteriaRequest,
  ) {
    const { id, projectId } = findAllResourceGroupsByCriteriaDto;

    const response = await this.queryBus.execute(
      new GetResourceGroupByCriteriaQuery(id, projectId),
    );

    return ResourceGroupsResponse.create({
      message: 'func:FindAllResourceGroupsByCriteria()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'CreateResourceGroup')
  async createResourceGroup(
    createResourceGroupDto: CreateResourceGroupRequest,
  ) {
    const { name, description, projectId } = createResourceGroupDto;

    const response = await this.commandBus.execute(
      new CreateResourceGroupCommand(name, description, projectId),
    );

    return ResourceGroupResponse.create({
      message: 'func:CreateResource()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'UpdateResourceGroup')
  async updateResourceGroup(
    updateResourceGroupDto: UpdateResourceGroupRequest,
  ) {
    const { id, name, description } = updateResourceGroupDto;

    const response = await this.commandBus.execute(
      new UpdateResourceGroupCommand(id, name, description),
    );

    return ResourceGroupResponse.create({
      message: 'func:UpdateResourceGroup()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('ResourcesService', 'DeleteResourceGroup')
  async deleteResourceGroup(
    deleteResourceGroupDto: DeleteResourceGroupRequest,
  ) {
    const { id } = deleteResourceGroupDto;

    const response = await this.commandBus.execute(
      new DeleteResourceGroupCommand(id),
    );

    return ResourceGroupResponse.create({
      message: 'func:DeleteResourceGroup()',
      statusCode: 200,
      data: response,
    });
  }
}
