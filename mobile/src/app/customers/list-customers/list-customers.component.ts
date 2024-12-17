import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/customer';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
})
export class ListCustomersComponent  implements OnInit {
  
  customers: Customer[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.customers.subscribe(x => this.customers = x);
    this.customersService.getCustomers();
  }

}
