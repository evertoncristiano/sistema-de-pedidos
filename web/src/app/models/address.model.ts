import { BaseModel } from "./base.model";

export class AddressModel extends BaseModel {
    street?: string
    number?: number
    district?: string
    city?: string

    constructor(address?: AddressModel) {
        super();

        this.id = address?.id
        this.street = address?.street
        this.number = address?.number
        this.district = address?.district
        this.city = address?.city
    }
}