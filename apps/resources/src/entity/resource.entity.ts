import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ResourceGroup } from './resource-group.entity';
import { ResourceAllocation } from './resource-allocation.entity';
import { Unit } from './unit.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({
    type: 'text',
    nullable: false,
  })
  name: string | undefined;

  @Column({
    name: 'unit_quantity',
    type: 'int',
    nullable: true,
  })
  unitQuantity?: number | undefined;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  cost?: number | undefined;

  @Column({
    name: 'project_id',
    type: 'varchar',
  })
  projectId: number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt!: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt!: string | undefined;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string | undefined;

  @ManyToOne(() => Unit, (unit) => unit.resources)
  unit?: Unit;

  @OneToMany(
    () => ResourceAllocation,
    (resourceAllocation) => resourceAllocation.resource,
  )
  resourceAllocation: ResourceAllocation[] | undefined;

  @ManyToOne(() => ResourceGroup, (resourceGroup) => resourceGroup.resource)
  @JoinColumn({ name: 'resource_group_id', referencedColumnName: 'id' })
  resourceGroup: ResourceGroup | undefined;
}
