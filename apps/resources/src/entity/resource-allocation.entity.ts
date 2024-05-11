import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Resource } from './resource.entity';

@Entity()
export class ResourceAllocation {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'int',
  })
  unit: number | undefined;

  @Column({ name: 'task_id', type: 'varchar' })
  taskId: number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string | undefined;

  @ManyToMany(() => Resource, (resource) => resource.resource_allocation)
  @JoinColumn({ name: 'resource_id', referencedColumnName: 'id' })
  resource: Resource | undefined;
}
