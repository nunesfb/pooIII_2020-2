import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateMaterials1598633804502
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'materials',
        columns: [
          {
            name: 'id_material',
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
            length: '100',
            isNullable: false,
          },
          {
            name: 'path',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'name_material',
            type: 'varchar',
            length: '50',
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
      'materials',
      new TableForeignKey({
        name: 'UserMaterial',
        columnNames: ['user'],
        referencedColumnNames: ['id_user'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'materials',
      new TableForeignKey({
        name: 'ProjectMaterial',
        columnNames: ['project'],
        referencedColumnNames: ['id_project'],
        referencedTableName: 'projects',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('materials');
  }
}
