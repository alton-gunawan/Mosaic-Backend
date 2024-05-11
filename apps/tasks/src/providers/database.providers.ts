import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskGroup } from '../entity/task-group.entity';
import { TaskAssignees } from '../entity/task-assignees.entity';
import { Task } from '../entity/task.entity';
import { TaskDependency } from '../entity/task-dependency.entity';

export const databaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_TCP_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [TaskDependency, TaskGroup, TaskAssignees, Task],
  logging: true,
  synchronize: true,
});
