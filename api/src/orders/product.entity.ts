import { BaseEntity } from "src/common/entity/base-entity.entity"
import { Column, Entity } from "typeorm"

@Entity()
export class Product extends BaseEntity {
    
    constructor() {
        super()
    }
    
    @Column()
    description: string

    @Column()
    price: number
}
