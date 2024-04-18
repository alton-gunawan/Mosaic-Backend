import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourcesService {
  getHello(): string {
    return 'Hello Resources!';
  }
}
