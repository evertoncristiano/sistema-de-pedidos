export class BaseModel {
    id?: string;
    
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    
    constructor(baseModel: BaseModel) {
        this.id = baseModel?.id

        this.createdAt = baseModel?.createdAt
        this.updatedAt = baseModel?.updatedAt
        this.deletedAt = baseModel?.deletedAt
    }
}