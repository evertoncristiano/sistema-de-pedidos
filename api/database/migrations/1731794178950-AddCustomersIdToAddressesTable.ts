import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCustomersIdToAddressesTable1731794178950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('addresses', new TableColumn({
            name: 'customersId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('addresses', new TableForeignKey({
            name: 'addressesCustomersId',
            columnNames: ['customersId'],
            referencedTableName: 'customers',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('addresses', 'addressesCustomersId');
        
        await queryRunner.dropColumn('addresses', 'customersId');
    }

}
