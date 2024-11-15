import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Customer } from "./customer.entity"

@Entity()
export class Address{
    constructor(street: string, number: number, district: string, city: string, state: string, country: string)
    {
        this.street = street
        this.number = number
        this.district = district
        this.city = city
        this.state = state
        this.country = country
    }

    @PrimaryGeneratedColumn()
    id: number


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
