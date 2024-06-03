import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class ProjectMembers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'project_id', type: 'int', nullable: false })
  projectId: number;

  @Column({ name: 'user_id', type: 'varchar', nullable: false })
  userId: string;

  @Column({ name: 'created_by' })
  createdBy: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: string;
}
