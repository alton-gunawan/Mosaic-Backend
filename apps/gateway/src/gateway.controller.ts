import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { DatabaseLoggingInterceptor } from './interceptors/database-logging.interceptor';

@UseInterceptors(DatabaseLoggingInterceptor)
@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get()
  getHello(): string {
    return this.gatewayService.getHello();
  }
}
