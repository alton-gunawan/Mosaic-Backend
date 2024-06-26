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
    name: 'user_id',
    type: 'varchar',
  })
  userId: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string | undefined;

  @ManyToOne(() => Task, (task) => task.taskAssignees, {
    cascade: true,
  })
  @JoinColumn({ name: 'task_id', referencedColumnName: 'id' })
  task: Task | undefined;
}
