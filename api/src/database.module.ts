import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Customer } from './customers/customer.entity';
import { Address } from './customers/address.entity';
import { Order } from './orders/order.entity';
import { OrderItem } from './orders/order-item.entity';
import { Product } from './orders/product.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => {
                return {
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: Number(configService.get('DB_PORT')),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASS'),
                    database: configService.get('DB_NAME') ,
                    synchronize: false,
                    entities: [
                        Customer,
                        Address,
                        Order,
                        OrderItem,
                        Product
                    ],
                }
            },
            inject: [ConfigService],
        })
    ]
})
export class DatabaseModule {}