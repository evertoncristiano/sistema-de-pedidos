import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { OrderItem } from "./order-item.entity";
import { Customer } from "src/customers/customer.entity";
import { BaseEntity } from "src/common/entity/base-entity.entity";

@Entity()
export class Order extends BaseEntity {

    constructor(street: string, number: number, district: string, city: string, state: string, country: string)
    {
        super()

        this.street = street
        this.number = number
        this.district = district
        this.city = city
        this.state = state
        this.country = country

        this.date = new Date
    }

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
        this.items = items
        
        this.totalPrice = 0
        items.map(item => this.incrementTotalPrice(item.totalPrice))
    }

    incrementTotalPrice(itemTotalPrice: number)
    {
        this.totalPrice += itemTotalPrice
    }
}
