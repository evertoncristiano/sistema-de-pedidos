import { Column, Entity, OneToMany } from "typeorm"
import { Address } from "./address.entity"
import { Order } from "src/orders/order.entity"
import { BaseEntity } from "src/common/entity/base-entity.entity"

@Entity()
export class Customer extends BaseEntity {
    constructor() {
      super()
    }

    @Column()
    name: string

    @Column()
    telephone: string


    @OneToMany(() => Address, (address) => address.customer)
    addresses: Address[]

    @OneToMany(() => Order, (order) => order.customer)
    orders: Order[]
}
