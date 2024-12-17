import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Model } from "../models/model";

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

    save(model: Model) {
        if (model.id) {
            return this.httpService.put(this.path, model.id, model);
        } else {
            return this.httpService.post(this.path, model);
        }
    }
}
