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
  })
  project_id: string | undefined;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: string | undefined;

  @OneToMany(() => Resource, (resource) => resource.resource_group)
  // @JoinColumn({ name: 'id', referencedColumnName: 'resource_group_id' })
  resource: Resource | undefined;
}
