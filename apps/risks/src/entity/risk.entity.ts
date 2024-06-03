import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import {
  RiskCategory,
  RiskLikelihood,
  RiskPriority,
  RiskStatus,
} from '../protos/risk';

@Entity()
export class Risk {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'text',
  })
  name: string | undefined;

  @Column({
    type: 'text',
  })
  description: string | undefined;

  @Column({
    type: 'enum',
    enum: RiskLikelihood,
    default: RiskLikelihood.UNRECOGNIZED,
  })
  likelihood: RiskLikelihood | undefined;

  @Column({
    type: 'enum',
    enum: RiskCategory,
    default: RiskCategory.UNRECOGNIZED,
  })
  category: RiskCategory | undefined;

  @Column({
    type: 'enum',
    enum: RiskStatus,
    default: RiskStatus.UNRECOGNIZED,
  })
  status: RiskStatus | undefined;

  @Column({
    type: 'text',
  })
  mitigation: string | undefined;

  @Column({
    type: 'enum',
    enum: RiskPriority,
    default: RiskPriority.UNRECOGNIZED,
  })
  priority: RiskPriority | undefined;

  @Column({
    type: 'varchar',
  })
  ownership: string | undefined;

  @Column({
    name: 'project_id',
    type: 'smallint',
  })
  projectId: number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: Date | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: Date | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date | undefined;
}
