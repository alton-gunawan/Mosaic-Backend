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

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
