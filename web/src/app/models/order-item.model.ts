import { BaseModel } from "./base.model";
import { OrderModel } from "./order.model";
import { ProductModel } from "./products.model";

export class OrderItemModel extends BaseModel {
    quantity: number
    unitPrice: number
    totalPrice: number

    order: OrderModel

    productId: string
    product: ProductModel

    constructor(orderItem?: OrderItemModel) {
        super(orderItem)

        this.quantity = orderItem?.quantity;
        this.unitPrice = orderItem?.unitPrice;
        this.totalPrice = orderItem?.totalPrice;

        this.order = orderItem?.order;

        this.productId = orderItem.productId
        this.product = orderItem?.product;
    }
}