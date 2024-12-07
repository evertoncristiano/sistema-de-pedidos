import { BaseModel } from "./base.model";

export class AddressModel extends BaseModel {
    street?: string
    number?: number
    district?: string
    city?: string
    state?: string
    country?: string

    constructor(address?: AddressModel) {
        super(address);

        this.street = address?.street
        this.number = address?.number
        this.district = address?.district
        this.city = address?.city
        this.state = address?.state
        this.country = address?.country
    }
}