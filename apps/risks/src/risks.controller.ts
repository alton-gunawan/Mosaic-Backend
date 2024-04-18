import { Controller, Get } from '@nestjs/common';
import { RisksService } from './risks.service';

@Controller()
export class RisksController {
  constructor(private readonly risksService: RisksService) {}

  @Get()
  getHello(): string {
    return this.risksService.getHello();
  }

  @Get('/health')
  healthCheck(): string {
    return JSON.stringify({
      status: 'up'
    });
  }
}
