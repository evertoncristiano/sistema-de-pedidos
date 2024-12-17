import { Address } from "./address";
import { Model } from "./model";

export class Customer extends Model {
    name?: string
    telephone?: string
    address?: Address
}