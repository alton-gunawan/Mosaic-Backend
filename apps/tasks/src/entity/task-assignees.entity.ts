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
export class TaskAssignees {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'varchar',
  })
  name: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string | undefined;

  @ManyToOne(() => Task, (task) => task.task_assignees)
  @JoinColumn({ name: 'task_assignees_id', referencedColumnName: 'id' })
  task: Task[] | undefined;
}
