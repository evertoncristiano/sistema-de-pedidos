import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ProductModel } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private path: string = 'products'

  constructor(private httpService: HttpService) {
  }

  getAll() {
    return this.httpService.getAll(this.path);
  }

  getById(id: string) {
    return this.httpService.getOne(this.path, id);
  }

  create(order: ProductModel) {
    return this.httpService.post(this.path, order);
  }

  update(id: string, order: ProductModel) {
    return this.httpService.put(this.path, id, order);
  }
}
