import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Project from './Project';

@Entity('activities')
class Activitie {
  @PrimaryGeneratedColumn('uuid')
  id_activitie: string;

  @Column('character varying', { length: 50 })
  name: string;

  @Column('character varying', { length: 255 })
  description: string;

  @Column()
  initial_date: Date;

  @Column('character varying')
  final_date: Date;

  @Column()
  value: number;

  @Column()
  discount: number;

  @Column()
  level: number;

  @Column('character varying')
  project: string;

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

export default Activitie;
