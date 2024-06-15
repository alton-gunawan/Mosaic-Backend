import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class TaskGroup {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'varchar',
  })
  name: string | undefined;

  @Column({
    type: 'tinyint',
  })
  order: number | undefined;

  @Column({
    name: 'project_id',
    type: 'varchar',
  })
  projectId: string | number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string | undefined;

  @OneToMany(() => Task, (task) => task.taskGroup)
  task: Task[] | undefined;
}
