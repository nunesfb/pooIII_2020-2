import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateActivities1598633825167
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activities',
        columns: [
          {
            name: 'id_activitie',
            type: 'uuid',
            isPrimary: true,
            // aqui ele vai gerar automatico o valor sendo um uuid
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'initial_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'final_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'discount',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'level',
            type: 'integer',
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
      'activities',
      new TableForeignKey({
        name: 'ProjectAcitivitie',
        columnNames: ['project'],
        referencedColumnNames: ['id_project'],
        referencedTableName: 'projects',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activities');
  }
}
