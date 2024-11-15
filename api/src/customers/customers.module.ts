import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer } from './customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Address])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
