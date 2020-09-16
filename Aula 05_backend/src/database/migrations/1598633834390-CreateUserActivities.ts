import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateUserActivities1598633834390
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_activities',
        columns: [
          {
            name: 'id_user_activitie',
            type: 'uuid',
            isPrimary: true,
            // aqui ele vai gerar automatico o valor sendo um uuid
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'date_send',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'observation',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'feedback',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'grade',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'path',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'name_archive',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'student',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'activitie',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'coordinator',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'users_activities',
      new TableForeignKey({
        name: 'Student',
        columnNames: ['student'],
        referencedColumnNames: ['id_user'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'users_activities',
      new TableForeignKey({
        name: 'Coordinator',
        columnNames: ['coordinator'],
        referencedColumnNames: ['id_user'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'users_activities',
      new TableForeignKey({
        name: 'Activitie',
        columnNames: ['activitie'],
        referencedColumnNames: ['id_activitie'],
        referencedTableName: 'activities',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_activities');
  }
}
