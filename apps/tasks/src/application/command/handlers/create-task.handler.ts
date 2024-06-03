import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../impl/create-task.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../../../entity/task.entity';
import { Repository } from 'typeorm';
import { durationToMs } from '@grpc/grpc-js/build/src/duration';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler
  implements ICommandHandler<CreateTaskCommand, any | object>
{
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async execute(command: CreateTaskCommand): Promise<any> {
    const duration = durationToMs(command.duration);

    return await this.taskRepository.save({  
      ...command,
      duration: duration,
      taskGroup: { id: command?.taskColumnId },
    });
  }
}
