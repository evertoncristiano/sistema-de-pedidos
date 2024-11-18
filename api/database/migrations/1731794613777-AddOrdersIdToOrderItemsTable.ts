import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddOrdersIdToOrderItemsTable1731794613777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('order_item', new TableColumn({
            name: 'orderId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('order_item', new TableForeignKey({
            name: 'orderItemOrderId',
            columnNames: ['orderId'],
            referencedTableName: 'order',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_item', 'orderItemOrderId');
        
        await queryRunner.dropColumn('order_item', 'orderId');
    }

}
