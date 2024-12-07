import { BaseEntity } from "src/common/entity/base-entity.entity"
import { Column, Entity } from "typeorm"

@Entity()
export class Product extends BaseEntity {
    
    constructor(name: string, description: string, price: number) {
        super()

        this.name = name
        this.description = description
        this.price = price
    }
    @Column()
    name: string
    
    @Column()
    description?: string

    @Column()
    price: number
}
