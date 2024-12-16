import { Entity } from "./entity";
import { Address } from "./address";

export class Customer extends Entity {
    name?: string
    telephone?: string
    address?: Address
}