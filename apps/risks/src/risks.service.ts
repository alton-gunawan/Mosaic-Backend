import { Injectable } from '@nestjs/common';

@Injectable()
export class RisksService {
  getHello(): string {
    return 'Hello Risks!';
  }
}
