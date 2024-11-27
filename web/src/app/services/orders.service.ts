import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private path: string = 'orders'

  constructor(private httpService: HttpService) {
  }

  getAll() {
    return this.httpService.getAll(this.path);
  }

  getById(id: string) {
    return this.httpService.getOne(this.path, id);
  }

  create(order: OrderModel) {
    return this.httpService.post(this.path, order);
  }

  update(id: string, order: OrderModel) {
    return this.httpService.put(this.path, id, order);
  }
}
