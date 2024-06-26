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
import { Resource } from './resource.entity';

@Entity()
export class ResourceAllocation {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    name: 'allocated_unit',
    type: 'int',
  })
  allocatedUnit: number | undefined;

  @Column({ name: 'task_id', type: 'int' })
  taskId: number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string | undefined;

  @ManyToOne(() => Resource, (resource) => resource.resourceAllocation)
  @JoinColumn({ name: 'resource_id', referencedColumnName: 'id' })
  resource: Resource | undefined;
}
