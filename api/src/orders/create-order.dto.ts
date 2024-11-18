export class CreateOrderDto {
    customerId: string
    street: string
    number: number
    district: string
    city: string
    state: string
    country: string

    items: OrderItemDto[]
}

export class OrderItemDto {
    productId: string
    quantity: number
    unitPrice: number
}
