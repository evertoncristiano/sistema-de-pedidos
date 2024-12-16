import { Entity } from "./entity"

export class Address extends Entity {
    street?: string
    number?: number
    district?: string
    city?: string
    state?: string
    country?: string
}