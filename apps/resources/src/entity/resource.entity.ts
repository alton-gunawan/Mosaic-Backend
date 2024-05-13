import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { ResourceGroup } from './resource-group.entity';
import { ResourceAllocation } from './resource-allocation.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'text',
  })
  name: string | undefined;

  @Column({
    type: 'int',
  })
  unit: number | undefined;

  @Column({
    type: 'varchar',
  })
  project_id: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string | undefined;

  @OneToMany(
    () => ResourceAllocation,
    (resourceAllocation) => resourceAllocation.resource,
  )
  resource_allocation: ResourceAllocation[] | undefined;

  @ManyToOne(() => ResourceGroup, (resourceGroup) => resourceGroup.resource)
  @JoinColumn({ name: 'resource_group_id', referencedColumnName: 'id' })
  resource_group: ResourceGroup | undefined;
}
