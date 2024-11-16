import 'dotenv/config';
import { DataSource, DataSourceOptions } from "typeorm";
import { CreateCustomersTable1731791317655 } from './migrations/1731791317655-CreateCustomersTable';
import { CreateAddressesTable1731791932247 } from './migrations/1731791932247-CreateAddressesTable';
import { CreateOrdersTable1731792649867 } from './migrations/1731792649867-CreateOrdersTable';
import { CreateOrderItemsTable1731793120241 } from './migrations/1731793120241-CreateOrderItemsTable';
import { CreateProductsTable1731793841000 } from './migrations/1731793841000-CreateProductsTable';
import { AddCustomersIdToAddressesTable1731794178950 } from './migrations/1731794178950-AddCustomersIdToAddressesTable';
import { AddOrdersIdToOrderItemsTable1731794613777 } from './migrations/1731794613777-AddOrdersIdToOrderItemsTable';
import { AddProductsIdToOrderItemsTable1731795040999 } from './migrations/1731795040999-AddProductsIdToOrderItemsTable';
import { AddCustomersIdToOrderTable1731795538900 } from './migrations/1731795538900-AddCustomersIdToOrderTable';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
}

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [
        CreateCustomersTable1731791317655,
        CreateAddressesTable1731791932247,
        CreateOrdersTable1731792649867,
        CreateOrderItemsTable1731793120241,
        CreateProductsTable1731793841000,   
        AddCustomersIdToAddressesTable1731794178950,
        AddOrdersIdToOrderItemsTable1731794613777,
        AddProductsIdToOrderItemsTable1731795040999,
        AddCustomersIdToOrderTable1731795538900
    ]
})