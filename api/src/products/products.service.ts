import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private readonly productsRepository: Repository<Product>) { }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: string) {
    return await this.productsRepository.findOne({ where: { id }});
  }

  async create({name, description, price}: CreateProductDto) {
    var product = new Product(name, description, price);

    await this.productsRepository.save(product)
  }

  async update(id: string, {name, description, price}: UpdateProductDto) {
    const product = await this.findOne(id);

    product.name = name
    product.description = description
    product.price = price

    return await this.productsRepository.save(product);
  }
}
