import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getHello(): string {
    return this.tasksService.getHello();
  }

  @Get('/health')
  healthCheck(): string {
    return JSON.stringify({
      "statusCode":200,
      "message":"up",
      "error":"Not Found"
    });
  }
}
