import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCustomersIdToAddressesTable1731794178950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('address', new TableColumn({
            name: 'customerId',
            type: 'uuid',
        }));

        await queryRunner.createForeignKey('address', new TableForeignKey({
            name: 'addressCustomerId',
            columnNames: ['customerId'],
            referencedTableName: 'customer',
            referencedColumnNames: ['id'],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('address', 'addressCustomerId');
        
        await queryRunner.dropColumn('address', 'customerId');
    }

}
