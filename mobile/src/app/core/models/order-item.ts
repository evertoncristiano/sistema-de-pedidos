import { Model } from "./model"
import { Product } from "./product"

export class OrderItem extends Model {
    quantity: number
    unitPrice: number
    totalPrice: number
    
    product: Product
    productId: string
}