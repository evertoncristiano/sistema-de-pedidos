import { Customer } from "./customer"
import { Model } from "./model"
import { OrderItem } from "./order-item"

export class Order extends Model {
    street?: string
    number?: number
    district?: string
    city?: string
    state?: string
    country?: string
    date?: Date
    totalPrice?: number

    items?: OrderItem[]
    customer: Customer
}