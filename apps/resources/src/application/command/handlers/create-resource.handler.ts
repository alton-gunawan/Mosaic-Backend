import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateResourceCommand } from '../impl/create-resource.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from '../../../entity/resource.entity';
import { Repository } from 'typeorm';
import { Unit } from 'apps/resources/src/entity/unit.entity';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateResourceCommand)
export class CreateResourceHandler
  implements ICommandHandler<CreateResourceCommand, any | object>
{
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>,
  ) {}

  async execute(command: CreateResourceCommand): Promise<Resource> {
    let unitId = +command.unit.id || null;

    try {
      if (!command.unit.id) {
        const createdUnit = await this.unitRepository.save({
          name: command?.unit?.name,
        });

        unitId = createdUnit.id;
      } else {
        const unit = await this.unitRepository.findOne({
          where: { id: +command.unit.id },
        });

        if (!unit) {
          throw new Error('Unit not found');
        }
      }

      const response = await this.resourceRepository.save({
        ...command,
        resourceGroup: { id: +command.resourceGroupId },
        unit: { id: unitId, name: command?.unit?.name },
      });

      return response;
    } catch (error) {
      return error;
    }
  }
}
