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
import { Task } from './entity/task.entity';

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
        +findAllTaskDto?.id,
        findAllTaskDto?.createdBy,
        findAllTaskDto?.projectId,
        findAllTaskDto?.taskColumnId,
      ),
    );

    this.logger.log('FindAllTasks');
    this.logger.log(response);

    return TasksResponse.create({
      message: 'func:FindAllTasks()',
      statusCode: 200,
      data: {
        ...response.map((value: Task) => ({
          ...value,
          // startDate: new Date(value.startDate).getTime(),
          // endDate: new Date(value.endDate).getTime(),
        })),
      },
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

      return TaskResponse.create({
        message: 'func:CreateTask()',
        statusCode: 201,
        data: response as any,
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @GrpcMethod('TasksService', 'UpdateTask')
  async update(updateTaskDto: UpdateTaskRequest) {
    try {
      const response = await this.commandBus.execute(
        new UpdateTaskCommand(
          +updateTaskDto.id,
          updateTaskDto?.name,
          updateTaskDto?.featuredImage,
          updateTaskDto?.description,
          updateTaskDto?.priority,
          new Date(updateTaskDto?.startDate),
          new Date(updateTaskDto?.endDate),
          updateTaskDto?.taskColumnId,
          updateTaskDto?.resources,
        ),
      );

      return TaskResponse.create({
        message: 'func:UpdateTask()',
        statusCode: 200,
        data: response,
      });
    } catch (error) {
      return TaskResponse.create({
        message: 'func:UpdateTask():error',
        statusCode: 400,
        data: error,
      });
    }
  }

  @GrpcMethod('TasksService', 'DeleteTask')
  async remove(deleteTaskDto: DeleteTaskRequest) {
    const response = await this.commandBus.execute(
      new DeleteTaskCommand(deleteTaskDto.id),
    );

    return TaskResponse.create({
      message: 'func:DeleteTask()',
      statusCode: 200,
      data: response,
    });
  }

  @GrpcMethod('TasksService', 'FindAllTaskColumn')
  async findAllTaskColumn(findAllTaskColumnDto: FindAllTaskColumnRequest) {
    const response = await this.queryBus.execute(
      new FindAllTaskColumnQuery(findAllTaskColumnDto.projectId),
    );

    return TaskColumnsResponse.create({
      message: 'func:FindAllTaskColumn()',
      statusCode: 200,
      data: response,
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
