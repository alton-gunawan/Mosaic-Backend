import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from '../entity/resource.entity';
import { ResourceGroup } from '../entity/resource-group.entity';
import { ResourceAllocation } from '../entity/resource-allocation.entity';
import { Unit } from '../entity/unit.entity';

export const databaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_TCP_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Resource, ResourceGroup, ResourceAllocation, Unit],
  logging: true,
  synchronize: true,
});
