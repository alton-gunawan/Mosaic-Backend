import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class TasksService {
  constructor(private readonly moduleRef: ModuleRef) {}

  checkIfClientsModuleRegistered(): any {
    // Check if ClientsModule itself is registered
    const isClientsModuleRegistered = this.moduleRef.get('RESOURCE_PACKAGE');

    return isClientsModuleRegistered;
  }
}
