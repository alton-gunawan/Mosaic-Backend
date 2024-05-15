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
import { TaskDependency } from './task-dependency.entity';
import { TaskGroup } from './task-group.entity';

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
    type: 'tinyint',
  })
  duration: number | undefined;

  @Column({
    type: 'date',
    name: 'end_date',
  })
  endDate: Date | undefined;

  @Column({
    type: 'varchar',
  })
  predecessor: string | undefined;

  @Column({
    type: 'varchar',
  })
  priority: string | undefined;

  @Column({
    type: 'varchar',
    name: 'project_id',
  })
  projectId: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string | undefined;

  @OneToMany(() => TaskAssignees, (task_assignees) => task_assignees.task)
  task_assignees: TaskAssignees[] | undefined;

  @OneToMany(() => TaskDependency, (task_dependency) => task_dependency.task)
  task_dependency: TaskDependency[] | undefined;

  @ManyToOne(() => TaskGroup, (task_group) => task_group.task)
  @JoinColumn({ name: 'task_group_id', referencedColumnName: 'id' })
  task_group: TaskGroup | undefined;
}
