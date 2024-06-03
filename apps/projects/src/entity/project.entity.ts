import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column({ name: 'featured_image', type: 'varchar' })
  featuredImage: string;

  @Column({ name: 'planned_start_date', type: 'date' })
  plannedStartDate: Date | undefined;

  @Column({ name: 'planned_end_date', type: 'date' })
  plannedEndDate: Date | undefined;

  @Column({ name: 'start_date', type: 'date' })
  actualStartDate: Date | undefined;

  @Column({ name: 'end_date', type: 'date' })
  actualEndDate: Date | undefined;

  @Column({ name: 'created_by' })
  createdBy: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: string;
}
