import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Resource } from './resource.entity';

@Entity()
export class ResourceGroup {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text' })
  name: string | undefined;

  @Column({
    type: 'varchar',
    name: 'project_id',
  })
  projectId: number | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date | undefined;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date | undefined;

  @OneToMany(() => Resource, (resource) => resource.resourceGroup)
  resource: Resource[] | undefined;
}
