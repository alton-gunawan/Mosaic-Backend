import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../entity/project.entity';

export const databaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_TCP_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Project],
  logging: true,
  synchronize: true,
});
