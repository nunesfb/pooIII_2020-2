import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';
import Project from './Project';

@Entity('users_projects')
class UserProject {
  @PrimaryGeneratedColumn('uuid')
  id_user_project: string;

  @Column()
  active: boolean;

  @Column()
  coordinator: boolean;

  @Column()
  level: number;

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
  @ManyToOne(() => Project)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'project' })
  project_id: Project;

  // https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserProject;
