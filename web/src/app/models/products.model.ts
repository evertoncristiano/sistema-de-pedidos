import { BaseModel } from "./base.model";

export class ProductModel extends BaseModel {
    name: string
    description: string
    price: number

    constructor(product: ProductModel) {
        super(product);
        
        this.name = product?.name
        this.description = product?.description
        this.price = product?.price
    }
}