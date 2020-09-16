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

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id_user: string;

  @Column('character varying', { length: 50 })
  name: string;

  @Column('character varying', { length: 50 })
  email: string;

  @Column('character varying', { length: 50 })
  password: string;

  @Column()
  date_birth: Date;

  @Column('character varying', { length: 15 })
  telephone: string;

  @Column('character varying', { length: 255 })
  address: string;

  @Column()
  start_year: Date;

  @Column('character varying', { length: 50 })
  user_type: string;

  @Column()
  active: boolean;

  @Column('character varying')
  user_avatar: string;

  // existem mtos serviços que podem ser prestados por um usuario
  // e digo qual model dever ser utilizado
  @OneToOne(() => Avatar)
  // aqui eu digo qual a coluna que vai identificar o usuario prestador deste servico
  @JoinColumn({ name: 'user_avatar' })
  avatar_user: Avatar;

  // https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
