import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddProductsIdToOrderItemsTable1731795040999 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('order_items', new TableColumn({
            name: 'productsId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('order_items', new TableForeignKey({
            name: 'orderItemsProductsId',
            columnNames: ['productsId'],
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_items', 'orderItemsProductsId');
        
        await queryRunner.dropColumn('order_items', 'productsId');
    }

}
