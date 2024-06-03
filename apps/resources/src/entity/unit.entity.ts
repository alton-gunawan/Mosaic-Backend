import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Resource } from './resource.entity';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar' })
  name: string | undefined;

  @OneToMany(() => Resource, (resource) => resource.unit)
  resources?: Resource[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: string | undefined;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: string | undefined;
}
