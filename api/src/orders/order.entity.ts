import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./order-item.entity";
import { Customer } from "src/customers/customer.entity";

@Entity()
export class Order {

    constructor(street: string, number: number, district: string, city: string, state: string, country: string)
    {
        this.street = street
        this.number = number
        this.district = district
        this.city = city
        this.state = state
        this.country = country

        this.date = new Date
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date


    @Column()
    street: string
    
    @Column()
    number: number
    
    @Column()
    district: string
    
    @Column()
    city: string
    
    @Column()
    state: string
    
    @Column()
    country: string


    @Column()
    totalPrice: number


    @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
    items: OrderItem[]

    @ManyToOne(() => Customer, (customer) => customer.orders)
    customer: Customer


    setItems (items: OrderItem[])
    {
        this.totalPrice = 0
        this.items = items

        items.map(item => this.incrementTotalPrice(item.totalPrice))
    }

    incrementTotalPrice(itemTotalPrice: number)
    {
        this.totalPrice += itemTotalPrice
    }
}
