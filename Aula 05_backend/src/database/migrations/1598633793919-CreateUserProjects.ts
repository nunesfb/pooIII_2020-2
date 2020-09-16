import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateUserProjects1598633793919
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_projects',
        columns: [
          {
            name: 'id_user_project',
            type: 'uuid',
            isPrimary: true,
            // aqui ele vai gerar automatico o valor sendo um uuid
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'active',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'coordinator',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'level',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'user',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'project',
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
      'users_projects',
      new TableForeignKey({
        name: 'User',
        columnNames: ['user'],
        referencedColumnNames: ['id_user'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'users_projects',
      new TableForeignKey({
        name: 'Project',
        columnNames: ['project'],
        referencedColumnNames: ['id_project'],
        referencedTableName: 'projects',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_projects');
  }
}
