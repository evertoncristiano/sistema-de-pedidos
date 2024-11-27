import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './update-order.dto';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAll(): Promise<Order[]> {
    return this.ordersService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(id);
  }
  
  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<void> {
    return this.ordersService.create(createOrderDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<void> {
    return this.ordersService.update(id, updateOrderDto);
  }
}
