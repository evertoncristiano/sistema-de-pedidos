import { Model } from "./model"

export class Address extends Model {
    street?: string
    number?: number
    district?: string
    city?: string
    state?: string
    country?: string
}