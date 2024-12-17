import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../models/customer';
import { Order } from '../models/order';

@Injectable({ providedIn: 'root' })
export class OrdersService extends BaseService {

  constructor(httpService: HttpService) {
    super(httpService, "orders")
  }

  private ordersSource = new BehaviorSubject<Order[]>([]);
  orders = this.ordersSource.asObservable();
  getOrders() {
    this.getAll().subscribe({
      next: (x: any) => {
        this.ordersSource.next(x);
      },
      error: (error) => console.log(error)
    });
  }
}
