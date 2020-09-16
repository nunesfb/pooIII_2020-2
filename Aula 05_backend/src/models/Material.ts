import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import User from './User';
import Project from './Project';

@Entity('materials')
class Material {
  @PrimaryGeneratedColumn('uuid')
  id_material: string;

  @Column('character varying', { length: 50 })
  name: string;

  @Column('character varying', { length: 100 })
  description: string;

  @Column('character varying', { length: 100 })
  path: string;

  @Column('character varying', { length: 50 })
  name_material: string;

  @Column('character varying')
  user: string;

  @Column('character varying')
  project: string;

  // existem mtos serviços que podem ser prestados por um usuario
  // e digo qual model dever ser utilizado
  @ManyToOne(() => User)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'user' })
  user_id: User;

  // existem mtos serviços que podem ser prestados por um usuario
  // e digo qual model dever ser utilizado
  @OneToOne(() => Project)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'project' })
  project_id: Project;

  // https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Material;
