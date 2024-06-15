import { IssuePriority, IssueStatus } from 'apps/gateway/src/protos/risk';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'varchar',
  })
  summary: string | undefined;

  @Column({
    type: 'text',
  })
  description: string | undefined;

  @Column({
    type: 'enum',
    enum: IssueStatus,
    default: IssueStatus.UNRECOGNIZED,
  })
  status: IssueStatus | undefined;

  @Column({
    type: 'enum',
    enum: IssuePriority,
    default: IssuePriority.UNRECOGNIZED,
  })
  priority: IssuePriority | undefined;

  @Column({
    name: 'ownership',
    type: 'varchar',
  })
  ownership: string | undefined;

  @Column({
    name: 'reported_by',
    type: 'varchar',
  })
  reportedBy: string | undefined;

  @Column({
    name: 'task_id',
    type: 'varchar',
  })
  taskId: number | undefined;

  @Column({
    name: 'project_id',
    type: 'varchar',
  })
  projectId: number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date | undefined;
}
