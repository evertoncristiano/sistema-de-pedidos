import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderItemsTable1731793120241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'order_item',
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
                    name: 'unitPrice',
                    type: 'float8',
                },
                {
                    name: 'totalPrice',
                    type: 'float8',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    isNullable: true
                },
                {
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order_item');
    }

}
