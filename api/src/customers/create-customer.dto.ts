export class CreateCustomerDto {
    readonly name: string
    readonly telephone: string

    readonly address: CreateAddressDto
}

export class CreateAddressDto {
    readonly street: string
    readonly number: number
    readonly district: string
    readonly city: string
}
