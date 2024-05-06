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
import { Resource } from './resource.entity';

@Entity()
export class ResourceAllocation {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'int',
  })
  unit: number | undefined;

  @Column({
    type: 'int',
    nullable: false,
  })
  resource_id: number | undefined;

  @Column({ name: 'task_id', type: 'text' })
  taskId: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string | undefined;

  @ManyToOne(() => Resource, (resource) => resource.resource_allocation)
  // @JoinColumn({ name: 'resource' })
  resource: Resource[] | undefined;
}
