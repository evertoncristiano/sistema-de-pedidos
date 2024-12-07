import { Column, Entity, ManyToOne} from "typeorm";
import { Order } from "./order.entity";
import { BaseEntity } from "src/common/entity/base-entity.entity";
import { Product } from "../products/product.entity";

@Entity()
export class OrderItem extends BaseEntity {
    constructor(quantity: number, unitPrice: number, product: Product ,order: Order){
        super()

        this.quantity = quantity
        this.unitPrice = unitPrice
        this.product = product
        this.order = order

        this.totalPrice = quantity * unitPrice
    }

    @Column()
    quantity: number

    @Column()
    unitPrice: number

    @Column()
    totalPrice: number
    

    @ManyToOne(() => Order, (order) => order.items)
    order: Order


    @ManyToOne(() => Product)
    product: Product
}
