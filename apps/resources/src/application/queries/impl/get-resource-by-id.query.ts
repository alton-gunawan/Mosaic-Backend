import { IQuery } from '@nestjs/cqrs';

export class GetResourceByIdQuery implements IQuery {
  public readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
