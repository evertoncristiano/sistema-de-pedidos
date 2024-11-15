import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class OrderItem {
    constructor(productId: number, quantity: number, unitPrice: number, order: Order){
        this.productId = productId
        this.quantity = quantity
        this.unitPrice = unitPrice
        this.order = order

        this.totalPrice = quantity * unitPrice
    }

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    productId: number

    @Column()
    quantity: number

    @Column()
    unitPrice: number

    @Column()
    totalPrice: number
    

    @ManyToOne(() => Order, (order) => order.items)
    order: Order
}
