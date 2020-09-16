import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Avatar from './Avatar';

@Entity('projects')
class Project {
  @PrimaryGeneratedColumn('uuid')
  id_project: string;

  @Column('character varying', { length: 50 })
  name: string;

  @Column('character varying', { length: 250 })
  description: string;

  @Column()
  initial_date: Date;

  @Column()
  final_date: Date;

  @Column()
  active: boolean;

  @Column('character varying')
  project_avatar: string;

  // existem mtos serviços que podem ser prestados por um usuario
  // e digo qual model dever ser utilizado
  @OneToOne(() => Avatar)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'project_avatar' })
  avatar_project: Avatar;

  // https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Project;
