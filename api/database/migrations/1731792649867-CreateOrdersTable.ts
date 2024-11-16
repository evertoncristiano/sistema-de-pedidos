import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrdersTable1731792649867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'date',
                    type: 'timestamp',
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
                    name: 'total_price',
                    type: 'float8',
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
        await queryRunner.dropTable('orders');
    }

}
