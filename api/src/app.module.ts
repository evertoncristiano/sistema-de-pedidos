import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    OrdersModule,
    CustomersModule
  ]
})
export class AppModule {}
