import { Injectable } from "@angular/core";
import { Entity } from "../entities/entity";
import { HttpService } from "./http.service";

@Injectable({ providedIn: 'root' })
export abstract class BaseService {
    private path: string

    constructor(private readonly httpService: HttpService, path: string) {
        this.path = path
    }

    getAll() {
        return this.httpService.getAll(this.path);
    }

    getById(id: string) {
        return this.httpService.getOne(this.path, id);
    }

    save(entity: Entity) {
        if (entity.id) {
            return this.httpService.put(this.path, entity.id, entity);
        } else {
            return this.httpService.post(this.path, entity);
        }
    }
}
