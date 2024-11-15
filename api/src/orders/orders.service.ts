import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './order-item.entity';
import { UpdateOrderDto } from './update-order.dto';
import { Customer } from 'src/customers/customer.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order) private readonly ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem) private readonly orderItemsRepository: Repository<OrderItem>,
    @InjectRepository(Customer) private readonly customersRepository: Repository<Customer>
  ) {
  }

  async findOne(id: number): Promise<Order> {
    return this.ordersRepository.findOne({
      where: { id },
      relations: {
        items: true,
        customer: true
      }
    })
  }

  async create(input: CreateOrderDto): Promise<void>
  {
    const { customerId, street, number, district, city, state, country, items} = input
    
    const customer = await this.customersRepository.findOneBy({ id: customerId })

    if (!customer)
      throw new NotFoundException(`Não foi encontrado um cliente com o id: ${customerId}`)

    if (items.length < 1)
      throw new BadRequestException("A ordem não possuí nenhum item");

    const order = new Order(street, number, district, city, state, country)
    order.customer = customer
  
    order.setItems(items.map(item => new OrderItem(item.productId, item.quantity, item.unitPrice, order)))
    
    await this.ordersRepository.save(order)
    await this.orderItemsRepository.save(order.items)
  }

  async update(id: number, input: UpdateOrderDto) {
    const { street, number, district, city, items } = input;

    if (items.length < 1)
      throw new BadRequestException("A ordem não possuí nenhum item");
    
    const order = await this.findOne(id)

    if (!order)
      throw new NotFoundException(`Não foi encontrada uma ordem com o id: ${id}`)

    order.street = street
    order.district = district
    order.number = number
    order.city = city

    await this.orderItemsRepository.remove(order.items)
    order.setItems(items.map(x => new OrderItem(x.productId, x.quantity, x.unitPrice, order)))

    await this.ordersRepository.save(order)
    await this.orderItemsRepository.save(order.items)
  }
}
