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
import Activitie from './Activitie';

@Entity('users_activities')
class UserActivitie {
  @PrimaryGeneratedColumn('uuid')
  id_user_activitie: string;

  @Column()
  date_send: Date;

  @Column('character varying', { length: 250 })
  observation: string;

  @Column('character varying', { length: 250 })
  feedback: string;

  @Column()
  grade: number;

  @Column('character varying', { length: 100 })
  path: string;

  @Column('character varying', { length: 100 })
  name_archive: string;

  @Column('character varying')
  student: string;

  @Column('character varying')
  activitie: string;

  @Column('character varying')
  coordinator: string;

  // existem mtos serviços que podem ser prestados por um usuario
  // e digo qual model dever ser utilizado
  @ManyToOne(() => User)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'student' })
  student_id: User;

  // existem mtos serviços que podem ser prestados por um usuario
  // e digo qual model dever ser utilizado
  @ManyToOne(() => Activitie)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'activitie' })
  activitie_id: Activitie;

  // existem mtos serviços que podem ser prestados por um usuario
  // e digo qual model dever ser utilizado
  @ManyToOne(() => User)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'coordinator' })
  coordinator_id: User;

  // https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserActivitie;
