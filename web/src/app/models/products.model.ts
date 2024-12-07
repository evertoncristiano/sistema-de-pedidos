import { BaseModel } from "./base.model";

export class ProductModel extends BaseModel {
    description: string
    price: number

    constructor(product: ProductModel) {
        super();

        this.description = product?.description
        this.price = product?.price
    }
}