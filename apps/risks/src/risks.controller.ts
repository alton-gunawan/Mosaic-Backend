import { Controller, Get, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { ListRisksQuery } from './application/queries/impl/list-risks.query';
import {
  RiskResponse,
  ListRisksRequest,
  CreateRiskRequest,
  DeleteRiskRequest,
  UpdateRiskRequest,
} from './protos/risk';
import { DeleteRiskCommand } from './application/command/impl/delete-risk.command';
import { UpdateRiskCommand } from './application/command/impl/update-risk.command';
import { CreateRiskCommand } from './application/command/impl/create-risk.command';

@Controller()
export class RisksController {
  private readonly logger = new Logger(RisksController.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('RisksService', 'ListRisks')
  async listRisks(listRisksDto?: ListRisksRequest) {
    try {
      const { id, limit, offset, projectId, taskId } = listRisksDto;

      const result = await this.queryBus.execute(
        new ListRisksQuery(id, taskId, projectId, limit, offset),
      );

      return RiskResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return RiskResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error retrieving project data',
        },
      });
    }
  }

  @GrpcMethod('RisksService', 'CreateRisk')
  async create(createRiskDto: CreateRiskRequest) {
    try {
      const {
        category,
        description,
        likelihood,
        mitigation,
        name,
        ownership,
        priority,
        status,
        projectId,
      } = createRiskDto;

      const result = await this.commandBus.execute(
        new CreateRiskCommand(
          name,
          description,
          likelihood,
          category,
          status,
          mitigation,
          priority,
          ownership,
          projectId,
        ),
      );

      return RiskResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error) {
      return RiskResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error retrieving project data',
        },
      });
    }
  }

  @GrpcMethod('RisksService', 'UpdateRisk')
  async update(updateRiskDto: UpdateRiskRequest) {
    try {
      const {
        id,
        category,
        description,
        likelihood,
        mitigation,
        name,
        ownership,
        priority,
        projectId,
        status,
      } = updateRiskDto;

      const result = await this.commandBus.execute(
        new UpdateRiskCommand(
          id,
          name,
          description,
          category,
          likelihood,
          mitigation,
          ownership,
          priority,
          status,
          projectId,
        ),
      );

      return RiskResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return RiskResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error creating risk data',
        },
      });
    }
  }

  @GrpcMethod('RisksService', 'DeleteRisk')
  async remove(deleteRiskDto: DeleteRiskRequest) {
    try {
      const { id } = deleteRiskDto;

      const result = await this.commandBus.execute(new DeleteRiskCommand(id));

      return RiskResponse.create({
        data: {
          data: result || undefined,
        },
      });
    } catch (error) {
      return RiskResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error retrieving project data',
        },
      });
    }
  }
}
