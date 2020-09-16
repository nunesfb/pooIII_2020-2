import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('avatar')
class Avatar {
  @PrimaryGeneratedColumn('uuid')
  id_avatar: string;

  @Column('character varying', { length: 100 })
  path: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Avatar;
