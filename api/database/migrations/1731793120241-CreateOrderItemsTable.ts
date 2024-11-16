import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderItemsTable1731793120241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'order_items',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'quantity',
                    type: 'int',
                },
                {
                    name: 'unit_price',
                    type: 'float8',
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
        await queryRunner.dropTable('order_items');
    }

}
