import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../../entity/task.entity';
import { In, Repository } from 'typeorm';
import { AssignTaskCommand } from '../impl/assign-task.command';
import { TaskAssignees } from 'apps/tasks/src/entity/task-assignees.entity';
import { Logger, NotFoundException } from '@nestjs/common';

@CommandHandler(AssignTaskCommand)
export class AssignTaskHandler
  implements ICommandHandler<AssignTaskCommand, any | object>
{
  constructor(
    @InjectRepository(TaskAssignees)
    private readonly taskAssigneeRepository: Repository<TaskAssignees>,
  ) {}

  async execute(command: AssignTaskCommand): Promise<any> {
    Logger.log('AssignTaskCommand:func()');
    Logger.log(JSON.stringify(command));

    const { taskId, userId } = command;

    // const task = await this.taskRepository.findOne(taskId);
    // const task = await this.taskAssigneeRepository.findOne({
    //   where: {
    //     task: {
    //       id: taskId,
    //     },
    //   },
    //   relations: ['task'],
    // });

    // Logger.log('Find Task:');
    // Logger.log(task);

    // if (!task) {
    //   throw new NotFoundException(`Task with id ${taskId} not found`);
    // }

    const tasks = [];

    userId?.forEach(async (user) => {
      const result = await this.taskAssigneeRepository.save({
        userId: user,
        task: {
          id: taskId,
        },
      });

      tasks.push(result);
    });

    return tasks;
  }
}
