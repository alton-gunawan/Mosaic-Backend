import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './resources.service';
import { databaseProviders } from './providers/database.providers';
import { Resource } from './entity/resource.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceGroup } from './entity/resource-group.entity';
import { ResourceAllocation } from './entity/resource-allocation.entity';
import { CreateResourceHandler } from './application/command/handlers/create-resource.handler';
import { UpdateResourceHandler } from './application/command/handlers/update-resource.handler';
import { DeleteResourceHandler } from './application/command/handlers/delete-resource.handler';
import { GetResourceByCriteriaHandler } from './application/queries/handlers/get-resource-by-criteria.handler';
import { GetResourceByIdHandler } from './application/queries/handlers/get-resource-by-id.handler';
import { GetResourceSummaryHandler } from './application/queries/handlers/get-resource-summary.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { GetResourceGroupByCriteriaHandler } from './application/queries/handlers/get-resource-group-by-criteria.handler';
import { GetResourceAllocationByCriteriaHandler } from './application/queries/handlers/get-resource-allocation-by-criteria.handler';
import { AssignResourceHandler } from './application/command/handlers/assign-resource.handler';
import { UnassignResourceHandler } from './application/command/handlers/unassign-resource.handler';
import { CreateResourceGroupHandler } from './application/command/handlers/create-resource-group.handler';
import { UpdateResourceGroupHandler } from './application/command/handlers/update-resource-group.handler';
import { DeleteResourceGroupHandler } from './application/command/handlers/delete-resource-group.handler';

const application = [
  CreateResourceHandler,
  UpdateResourceHandler,
  DeleteResourceHandler,
  GetResourceByCriteriaHandler,
  GetResourceByIdHandler,
  GetResourceSummaryHandler,
  GetResourceGroupByCriteriaHandler,
  GetResourceAllocationByCriteriaHandler,
  AssignResourceHandler,
  UnassignResourceHandler,
  CreateResourceGroupHandler,
  UpdateResourceGroupHandler,
  DeleteResourceGroupHandler,
];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Resource, ResourceGroup, ResourceAllocation]),
    databaseProviders,
  ],
  controllers: [ResourcesController],
  providers: [ResourcesService, ...application],
})
export class ResourcesModule {}
