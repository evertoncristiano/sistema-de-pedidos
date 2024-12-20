import { BaseModel } from "./base.model";
import { CustomerModel } from "./customer.model";
import { OrderItemModel } from "./order-item.model";

export class OrderModel extends BaseModel {
    street: string
    number: number
    district: string
    city: string
    state: string
    country: string
    date: Date
    totalPrice: number

    customerId: string
    customer: CustomerModel
    
    items: OrderItemModel[]

    constructor(order?: OrderModel) {
        super(order);

        this.street = order?.street
        this.number = order?.number
        this.district = order?.district
        this.city = order?.city
        this.state = order?.state
        this.country = order?.country
        this.date = order?.date
        this.totalPrice = order?.totalPrice
        
        this.customerId = order?.customerId
        this.customer = order?.customer ? order.customer : new CustomerModel()
        this.items = order?.items ? order.items : []
    }
}