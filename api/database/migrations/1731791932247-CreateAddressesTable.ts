import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddressesTable1731791932247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'addresses',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'street',
                    type: 'varchar',
                },
                {
                    name: 'number',
                    type: 'int',
                },
                {
                    name: 'district',
                    type: 'varchar',
                },
                {
                    name: 'city',
                    type: 'varchar',
                },
                {
                    name: 'state',
                    type: 'varchar',
                },
                {
                    name: 'country',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses');
    }

}
