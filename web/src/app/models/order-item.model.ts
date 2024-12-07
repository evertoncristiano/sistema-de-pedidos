import { BaseModel } from "./base.model";
import { OrderModel } from "./order.model";
import { ProductModel } from "./products.model";

export class OrderItemModel extends BaseModel {
    quantity: number
    unitPrice: number
    totalPrice: number

    order: OrderModel
    product: ProductModel

    constructor(orderItem?: OrderItemModel) {
        super()

        this.quantity = orderItem?.quantity;
        this.unitPrice = orderItem?.unitPrice;
        this.totalPrice = orderItem?.totalPrice;

        this.order = orderItem?.order;
        this.product = orderItem?.product;
    }
}