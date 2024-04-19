import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../entity/project.entity';

export const databaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'mosaic_db',
  entities: [Project],
  logging: true,
  synchronize: true,
});
