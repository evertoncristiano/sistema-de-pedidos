import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Address } from "./address.entity"
import { Order } from "src/orders/order.entity"

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    telephone: string


    @OneToMany(() => Address, (address) => address.customer)
    addresses: Address[]

    @OneToMany(() => Order, (order) => order.customer)
    orders: Order[]
}
