import { Column, Entity, ManyToOne } from "typeorm"
import { Customer } from "./customer.entity"
import { BaseEntity } from "src/common/entity/base-entity.entity"

@Entity()
export class Address extends BaseEntity {
    constructor(street: string, number: number, district: string, city: string, state: string, country: string)
    {
        super()

        this.street = street
        this.number = number
        this.district = district
        this.city = city
        this.state = state
        this.country = country
    }

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
    

    @ManyToOne(() => Customer, (customer) => customer.addresses)
    customer: Customer
}
