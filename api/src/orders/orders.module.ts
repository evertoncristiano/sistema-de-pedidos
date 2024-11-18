import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { Customer } from 'src/customers/customer.entity';
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Product, Customer])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
