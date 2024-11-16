import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCustomersIdToOrderTable1731795538900 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orders', new TableColumn({
            name: 'customersId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('orders', new TableForeignKey({
            name: 'ordersCustomersId',
            columnNames: ['customersId'],
            referencedTableName: 'customers',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders', 'ordersCustomersId');
        
        await queryRunner.dropColumn('orders', 'customersId');
    }

}
