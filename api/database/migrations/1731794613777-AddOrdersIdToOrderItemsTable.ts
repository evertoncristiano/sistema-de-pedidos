import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddOrdersIdToOrderItemsTable1731794613777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('order_items', new TableColumn({
            name: 'ordersId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('order_items', new TableForeignKey({
            name: 'orderItemsOrdersId',
            columnNames: ['ordersId'],
            referencedTableName: 'orders',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_items', 'orderItemsOrdersId');
        
        await queryRunner.dropColumn('order_items', 'ordersId');
    }

}
