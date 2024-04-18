import { Controller, Get } from '@nestjs/common';
import { ResourcesService } from './resources.service';

@Controller()
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  getHello(): string {
    return this.resourcesService.getHello();
  }

  @Get('/health')
  healthCheck(): string {
    return JSON.stringify({
      status: 'up'
    });
  }
}
