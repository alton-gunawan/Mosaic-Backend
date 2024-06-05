import { Controller, HttpException, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateTaskColumnRequest,
  CreateTaskRequest,
  DeleteTaskColumnRequest,
  DeleteTaskRequest,
  ListTaskColumnsRequest,
  ListTasksRequest,
  TaskColumn,
  TaskColumnResponse,
  TaskResponse,
  UpdateTaskRequest,
} from './protos/task';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ListTaskQuery } from './application/queries/impl/find-all-tasks.query';
import { DeleteTaskCommand } from './application/command/impl/delete-task.command';
import { CreateTaskColumnCommand } from './application/command/impl/create-task-column.command';
import { ListTaskColumnQuery } from './application/queries/impl/find-all-task-column.query';
import { DeleteTaskColumnCommand } from './application/command/impl/delete-task-column.command';
import { Task } from './entity/task.entity';
import { CreateTaskCommand } from './application/command/impl/create-task.command';
import * as moment from 'moment';
import { UpdateTaskCommand } from './application/command/impl/update-task.command';
import { Timestamp } from './protos/google/protobuf/timestamp';
import getSecondsAndNanos from './utils/get-seconds-nanos-time';
import { Duration } from './protos/google/protobuf/duration';
import numberToDuration from './utils/convert-second-to-duration';
import { durationToMs, msToDuration } from '@grpc/grpc-js/build/src/duration';

@Controller()
export class TasksController {
  private readonly logger = new Logger(TasksController.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('TasksService', 'ListTasks')
  async findAll(findAllTaskDto?: ListTasksRequest) {
    try {
      const { id, createdBy, projectId, taskColumnId } = findAllTaskDto;

      const result = await this.queryBus.execute(
        new ListTaskQuery(id, createdBy, projectId, taskColumnId),
      );

      const formattedResponse =
        result?.map((value: Task) => ({
          ...value,
          startDate: value?.startDate
            ? Timestamp.create({
                seconds: getSecondsAndNanos(new Date(value?.startDate)).seconds,
                nanos: getSecondsAndNanos(new Date(value?.startDate)).nanos,
              }) || undefined
            : undefined,
          duration: value?.duration
            ? Duration.create({
                seconds: numberToDuration(value?.duration).seconds,
                nanos: numberToDuration(value?.duration).nanos,
              }) || undefined
            : undefined,
        })) || [];

      return TaskResponse.create({
        data: {
          data: formattedResponse || undefined,
        },
      });
    } catch (error) {
      return TaskResponse.create({
        error: {
          statusCode: error.status || 500,
          message: error.message || 'Error creating project data',
        },
      });
    }
  }

  @GrpcMethod('TasksService', 'CreateTask')
  async create(createTaskDto: CreateTaskRequest) {
    try {
      // const duration =
      //   typeof createTaskDto.duration === 'number'
      //     ? +createTaskDto.duration / (60 * 60 * 24)
      //     : undefined;
      Logger.log('createTaskDto:func()');
      Logger.log(JSON.stringify(createTaskDto));
      Logger.log(createTaskDto);

      const startDate =
        typeof createTaskDto.startDate === 'object'
          ? moment.unix((createTaskDto?.startDate as any)?.seconds)?.toDate()
          : undefined;

      const result = await this.commandBus.execute(
        new CreateTaskCommand(
          createTaskDto?.name,
          createTaskDto?.featuredImage,
          createTaskDto?.description,
          createTaskDto?.status,
          createTaskDto?.priority,
          startDate,
          createTaskDto?.duration,
          createTaskDto?.predecessor,
          createTaskDto?.subtasks,
          createTaskDto?.order,
          createTaskDto?.createdBy,
          createTaskDto?.assignedTo,
          createTaskDto?.issueId,
          createTaskDto?.taskColumnId,
          createTaskDto?.projectId,
        ),
      );

      return TaskResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error) {
      return TaskResponse.create({
        error: {
          statusCode: error.status || 500,
          message: error.message || 'Error creating project data',
        },
      });
    }
  }

  @GrpcMethod('TasksService', 'UpdateTask')
  async update(updateTaskDto: UpdateTaskRequest) {
    try {
      const duration =
        typeof updateTaskDto.duration === 'number'
          ? +updateTaskDto.duration / (60 * 60 * 24)
          : undefined;
      const startDate =
        typeof updateTaskDto.startDate === 'object'
          ? moment.unix((updateTaskDto?.startDate as any)?.seconds)?.toDate()
          : undefined;

      const result = await this.commandBus.execute(
        new UpdateTaskCommand(
          +updateTaskDto.id,
          updateTaskDto?.name,
          updateTaskDto?.featuredImage,
          updateTaskDto?.description,
          updateTaskDto?.status,
          updateTaskDto?.priority,
          startDate,
          duration,
          updateTaskDto?.taskColumnId,
          updateTaskDto?.predecessor,
          updateTaskDto?.order,
        ),
      );

      return TaskResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error) {
      return TaskResponse.create({
        error: {
          statusCode: error?.status || 500,
          message: error?.message || 'Error creating project data',
        },
      });
    }
  }

  @GrpcMethod('TasksService', 'DeleteTask')
  async remove(deleteTaskDto: DeleteTaskRequest) {
    try {
      const { id } = deleteTaskDto;

      await this.commandBus.execute(new DeleteTaskCommand(id));

      return {};
    } catch (error) {
      return TaskResponse.create({
        error: {
          statusCode: error.status || 500,
          message: error.message || 'Error creating project data',
        },
      });
    }
  }

  @GrpcMethod('TasksService', 'ListTaskColumns')
  async findAllTaskColumn(findAllTaskColumnDto: ListTaskColumnsRequest) {
    try {
      const result: TaskColumn[] = await this.queryBus.execute(
        new ListTaskColumnQuery(findAllTaskColumnDto?.projectId),
      );

      Logger.log('ListTaskColumns:result()');
      Logger.log(result);

      return TaskColumnResponse.create({
        data: {
          data:
            result?.map((value: TaskColumn) => ({
              ...value,
              task:
                value?.task?.map((task) => ({
                  ...task,
                  startDate: task?.startDate
                    ? (Timestamp.create({
                        seconds: getSecondsAndNanos(new Date(task?.startDate))
                          .seconds,
                        nanos: getSecondsAndNanos(new Date(task?.startDate))
                          .nanos,
                      }) as any) || undefined
                    : undefined,
                  duration: task?.duration
                    ? (Duration.create({
                        seconds: numberToDuration(
                          task?.duration as unknown as number,
                        ).seconds,
                        nanos: numberToDuration(
                          task?.duration as unknown as number,
                        ).nanos,
                      }) as any) || undefined
                    : undefined,
                })) || [],
            })) || [],
        },
      });
    } catch (error) {
      return TaskColumnResponse.create({
        error: {
          statusCode: 500,
          message: error || 'Error creating project data',
        },
      });
    }
  }

  @GrpcMethod('TasksService', 'CreateTaskColumn')
  async createTaskColumn(createTaskColumnDto: CreateTaskColumnRequest) {
    try {
      const result = await this.commandBus.execute(
        new CreateTaskColumnCommand(
          createTaskColumnDto.name,
          createTaskColumnDto?.limit,
          createTaskColumnDto?.order,
          createTaskColumnDto.projectId,
        ),
      );

      return TaskColumnResponse.create({
        data: {
          data: [result] || undefined,
        },
      });
    } catch (error) {
      return TaskColumnResponse.create({
        error: {
          statusCode: error?.status || 500,
          message: error?.message || 'Error creating task column',
        },
      });
    }
  }

  @GrpcMethod('TasksService', 'DeleteTaskColumn')
  async deleteTaskColumn(deleteTaskColumnDto: DeleteTaskColumnRequest) {
    try {
      await this.commandBus.execute(
        new DeleteTaskColumnCommand(deleteTaskColumnDto.id),
      );

      return {};
    } catch (error) {
      return TaskColumnResponse.create({
        error: {
          statusCode: error?.status || 500,
          message: error?.message || 'Error creating task column',
        },
      });
    }
  }
}
