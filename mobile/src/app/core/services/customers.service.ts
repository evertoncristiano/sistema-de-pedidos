import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs';
import { Customer } from '../entities/customer';

@Injectable({ providedIn: 'root' })
export class CustomersService extends BaseService {

  constructor(httpService: HttpService) {
    super(httpService, "customers")
  }

  private customersSource = new BehaviorSubject<Customer[]>([]);
  customers = this.customersSource.asObservable();
  getCustomers() {
    this.getAll().subscribe({
      next: (customers: any) => {
        this.customersSource.next(customers.map((c: any) => { return {...c, address: c.addresses[0]} } ));
      },
      error: (error) => console.log(error)
    });
  }
}
