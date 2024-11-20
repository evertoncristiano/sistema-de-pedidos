import { AddressModel } from "./address.model";
import { BaseModel } from "./base.model";

export class CustomerModel extends BaseModel {
    name: string
    telephone: string
    address: AddressModel

    constructor(customer: CustomerModel) {
        super();

        this.name = customer.name
        this.telephone = customer.telephone
        this.address = customer.address
    }
}