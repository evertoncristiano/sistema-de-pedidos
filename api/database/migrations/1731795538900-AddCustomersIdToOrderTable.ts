import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCustomersIdToOrderTable1731795538900 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('order', new TableColumn({
            name: 'customerId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('order', new TableForeignKey({
            name: 'orderCustomerId',
            columnNames: ['customerId'],
            referencedTableName: 'customer',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order', 'orderCustomerId');
        
        await queryRunner.dropColumn('order', 'customerId');
    }

}
