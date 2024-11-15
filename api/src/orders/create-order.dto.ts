export class CreateOrderDto {
    customerId: number
    street: string
    number: number
    district: string
    city: string
    state: string
    country: string

    items: OrderItemDto[]
}

export class OrderItemDto {
    productId: number
    quantity: number
    unitPrice: number
}
