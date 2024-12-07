import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { OrderModel } from '../models/order.model';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class OrdersService extends BaseService {

  constructor(httpService: HttpService) {
    super(httpService, "orders")
  }

}
