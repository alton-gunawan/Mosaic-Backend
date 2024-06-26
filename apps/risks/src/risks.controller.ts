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
import {
  CreateIssuesRequest,
  DeleteIssuesRequest,
  IssueResponse,
  ListIssuesRequest,
  UpdateIssuesRequest,
} from 'apps/gateway/src/protos/risk';
import { ListIssuesQuery } from './application/queries/impl/list-issues.query';
import { CreateIssueCommand } from './application/command/impl/create-issue.command';

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

      Logger.log('RisksService:ListRisks()');
      Logger.log(result);

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
    Logger.log('CreateRiskRequest');
    Logger.log(createRiskDto);

    try {
      const {
        category,
        description,
        likelihood,
        mitigation,
        name,
        ownership,
        projectId,
      } = createRiskDto;

      const result = await this.commandBus.execute(
        new CreateRiskCommand(
          name,
          description,
          likelihood,
          category,
          mitigation,
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

  @GrpcMethod('RisksService', 'ListIssues')
  async listIssues(listIssueDto: ListIssuesRequest) {
    const { id, projectId, taskId, limit, offset } = listIssueDto;

    Logger.log('listIssueDto:func()');
    Logger.log(listIssueDto);

    try {
      const result = await this.queryBus.execute(
        new ListIssuesQuery(id, taskId, projectId, limit, offset),
      );

      return IssueResponse.create({
        data: {
          data: result || [],
        },
      });
    } catch (error) {
      IssueResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error retrieving issue data',
        },
      });
    }
  }

  @GrpcMethod('RisksService', 'CreateIssues')
  async createIssues(createIssueDto: CreateIssuesRequest) {
    const {
      summary,
      description,
      ownership,
      priority,
      projectId,
      reportedBy,
      status,
      taskId,
    } = createIssueDto;

    try {
      const result = await this.commandBus.execute(
        new CreateIssueCommand(
          summary,
          description,
          status,
          priority,
          reportedBy,
          ownership,
          taskId,
          projectId,
        ),
      );

      return IssueResponse.create({
        data: {
          data: [await result] || [],
        },
      });
    } catch (error) {
      throw IssueResponse.create({
        error: {
          statusCode: 500,
          message: 'Error creating issue data',
        },
      });
    }
  }

  @GrpcMethod('RisksService', 'UpdateIssues')
  async updateIssues(updateIssueDto: UpdateIssuesRequest) {
    try {
    } catch (error) {
      return IssueResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error updating issue data',
        },
      });
    }
  }

  @GrpcMethod('RisksService', 'DeleteIssues')
  async deleteIssues(deleteIssueDto: DeleteIssuesRequest) {
    try {
    } catch (error) {
      return IssueResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error deleting issue data',
        },
      });
    }
  }
}
