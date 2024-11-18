import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddProductsIdToOrderItemsTable1731795040999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('order_item', new TableColumn({
            name: 'productId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('order_item', new TableForeignKey({
            name: 'orderItemProductId',
            columnNames: ['productId'],
            referencedTableName: 'product',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_item', 'orderItemProductId');
        
        await queryRunner.dropColumn('order_item', 'productId');
    }

}
