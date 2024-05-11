import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class TaskDependency {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'varchar',
  })
  type: string | undefined;

  @Column({
    type: 'varchar',
  })
  offset: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string | undefined;

  @ManyToOne(() => Task, (task) => task.task_dependency)
  @JoinColumn({ name: 'task_dependency_id', referencedColumnName: 'id' })
  task: Task[] | undefined;
}
