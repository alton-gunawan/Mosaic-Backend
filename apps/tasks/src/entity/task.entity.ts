import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TaskAssignees } from './task-assignees.entity';
import { TaskGroup } from './task-group.entity';
import { TaskPriority, TaskStatus } from '../protos/task';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'varchar',
  })
  name: string | undefined;

  @Column({
    type: 'varchar',
  })
  description: string | undefined;

  @Column({
    type: 'varchar',
    name: 'featured_image',
  })
  featuredImage: string | undefined;

  @Column({
    type: 'date',
    name: 'start_date',
  })
  startDate: Date | undefined;

  @Column({
    type: 'int',
  })
  duration: number | undefined;

  @Column({
    type: 'text',
  })
  predecessor: string | undefined;

  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.UNRECOGNIZED,
  })
  priority: TaskPriority | undefined;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.UNRECOGNIZED,
  })
  status: TaskStatus | undefined;

  @Column({
    type: 'tinyint',
  })
  order: number | undefined;

  @Column({
    type: 'varchar',
    name: 'created_by',
  })
  createdBy: string | undefined;

  @Column({
    type: 'varchar',
    name: 'project_id',
  })
  projectId: number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string | undefined;

  @OneToMany(() => TaskAssignees, (task_assignees) => task_assignees.task)
  taskAssignees: TaskAssignees[] | undefined;

  @ManyToOne(() => TaskGroup, (task_group) => task_group.task, {
    cascade: true,
  })
  @JoinColumn({ name: 'task_group_id', referencedColumnName: 'id' })
  taskGroup: TaskGroup | undefined;
}
