import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Resource } from './resource.entity';

@Entity()
export class ResourceGroup {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'text' })
  name: string | undefined;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string | undefined;

  @Column({
    type: 'varchar',
    name: 'project_id',
  })
  projectId: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string | undefined;

  @OneToMany(() => Resource, (resource) => resource.resource_group)
  resource: Resource[] | undefined;
}
