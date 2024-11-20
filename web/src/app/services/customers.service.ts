import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private path: string = 'customers'

  constructor(private httpService: HttpService) { 
  }

  getById(id: string) {
    return this.httpService.getOne(this.path, id);
  }

  save(customer: CustomerModel) {
    return this.httpService.post(this.path, customer);
  }

  update(id: string, customer: CustomerModel) {
    return this.httpService.put(this.path, id, customer);
  }
}
