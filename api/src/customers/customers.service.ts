import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './create-customer.dto';
import { UpdateCustomerDto } from './update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private readonly customersRepository: Repository<Customer>,
    @InjectRepository(Address) private readonly addressesRepository: Repository<Address>
  ) {}

  async findOne(id: string) {
    const customer = await this.customersRepository.findOne({ 
      where: { id },
      relations: { addresses: true }
    });

    if (!customer)
      throw new NotFoundException(`Não foi encontrado um usuário com o id ${id}`)

    return customer
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { street, number, district, city } = createCustomerDto.address;

    const customer = new Customer()
    customer.name = createCustomerDto.name
    customer.telephone = createCustomerDto.telephone  

    await this.customersRepository.save(customer)
    
    const address = new Address(street, number, district, city, "Rio Grande do Sul", "Brasil")
    address.customer = customer

    await this.addressesRepository.save(address)

    return customer
  }

  async update(id: string, input: UpdateCustomerDto) {
    const customer = await this.findOne(id);

    customer.name = input.name
    customer.telephone = input.telephone

    const address = customer.addresses[0]

    address.street = input.address.street
    address.number = input.address.number
    address.district = input.address.district
    address.city = input.address.city

    await this.addressesRepository.save(address)
    return this.customersRepository.save(customer);
  }
}
