import { Controller, HttpException, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateTaskColumnRequest,
  CreateTaskRequest,
  DeleteTaskRequest,
  FindAllTaskColumnRequest,
  FindAllTasksRequest,
  RemoveTaskColumnRequest,
  TaskColumnsResponse,
  TaskResponse,
  TasksResponse,
  UpdateTaskRequest,
} from './protos/task';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindAllTasksQuery } from './application/queries/impl/find-all-tasks.query';
import { CreateTaskCommand } from './application/command/impl/create-task.command';
import { UpdateTaskCommand } from './application/command/impl/update-task.command';
import { DeleteTaskCommand } from './application/command/impl/delete-task.command';
import { CreateTaskColumnCommand } from './application/command/impl/create-task-column.command';
import { FindAllTaskColumnQuery } from './application/queries/impl/find-all-task-column.query';
import { DeleteTaskColumnCommand } from './application/command/impl/delete-task-column.command';

@Controller()
export class TasksController {
  private readonly logger = new Logger(TasksController.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('TasksService', 'FindAllTasks')
  async findAll(findAllTaskDto?: FindAllTasksRequest) {
    const response = await this.queryBus.execute(
      new FindAllTasksQuery(
        findAllTaskDto?.id,
        findAllTaskDto?.name,
        findAllTaskDto?.featuredImage,
        findAllTaskDto?.description,
        findAllTaskDto?.status,
        findAllTaskDto?.priority,
        findAllTaskDto?.startDate,
        findAllTaskDto?.endDate,
        findAllTaskDto?.createdBy,
        findAllTaskDto?.projectId,
        findAllTaskDto?.taskColumnId,
      ),
    );

    return TasksResponse.create({
      message: 'func:FindAllTasks()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('TasksService', 'CreateTask')
  async create(createTaskDto: CreateTaskRequest) {
    try {
      const response = await this.commandBus.execute(
        new CreateTaskCommand(
          createTaskDto?.name,
          createTaskDto?.featuredImage,
          createTaskDto?.description,
          createTaskDto?.status,
          createTaskDto?.priority,
          createTaskDto?.startDate,
          createTaskDto?.endDate,
          createTaskDto?.createdBy,
          createTaskDto?.projectId,
          createTaskDto?.taskColumnId,
        ),
      );

      this.logger.log('CreateTask():', response);

      return TaskResponse.create({
        message: 'func:CreateTask()',
        statusCode: 201,
        data: response,
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @GrpcMethod('TasksService', 'UpdateTask')
  async update(updateTaskDto: UpdateTaskRequest) {
    const response = await this.commandBus.execute(
      new UpdateTaskCommand(
        updateTaskDto.id,
        updateTaskDto?.name,
        updateTaskDto?.featuredImage,
        updateTaskDto?.description,
        updateTaskDto?.status,
        updateTaskDto?.priority,
        updateTaskDto?.startDate,
        updateTaskDto?.endDate,
        updateTaskDto?.taskColumnId,
        updateTaskDto?.subtasks,
        updateTaskDto?.assignees,
      ),
    );

    return TasksResponse.create({
      message: 'func:UpdateTask()',
      statusCode: 200,
      data: [],
    });
  }

  @GrpcMethod('TasksService', 'DeleteTask')
  async remove(deleteTaskDto: DeleteTaskRequest) {
    const response = await this.commandBus.execute(
      new DeleteTaskCommand(deleteTaskDto.id),
    );

    return TasksResponse.create({
      message: 'func:DeleteTask()',
      statusCode: 200,
      data: [],
    });
  }

  @GrpcMethod('TasksService', 'FindAllTaskColumn')
  async findAllTaskColumn(findAllTaskColumnDto: FindAllTaskColumnRequest) {
    return TaskColumnsResponse.create({
      message: 'func:FindAllTaskColumn()',
      statusCode: 200,
      data: await this.queryBus.execute(
        new FindAllTaskColumnQuery(findAllTaskColumnDto.projectId),
      ),
    });
  }

  @GrpcMethod('TasksService', 'CreateTaskColumn')
  async createTaskColumn(createTaskColumnDto: CreateTaskColumnRequest) {
    const response = await this.commandBus.execute(
      new CreateTaskColumnCommand(
        createTaskColumnDto.name,
        createTaskColumnDto?.limit,
        createTaskColumnDto?.order,
        createTaskColumnDto.projectId,
      ),
    );

    return TasksResponse.create({
      message: 'func:CreateTaskColumn()',
      statusCode: 201,
      data: [],
    });
  }

  @GrpcMethod('TasksService', 'RemoveTaskColumn')
  async deleteTaskColumn(deleteTaskColumnDto: RemoveTaskColumnRequest) {
    const response = await this.commandBus.execute(
      new DeleteTaskColumnCommand(deleteTaskColumnDto.id),
    );

    return TasksResponse.create({
      message: 'func:RemoveTaskColumn()',
      statusCode: 200,
      data: [],
    });
  }
}
