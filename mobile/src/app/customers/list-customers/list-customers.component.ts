import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/entities/customer';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
})
export class ListCustomersComponent  implements OnInit {
  
  public customers: Customer[] = [];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getCustomers()

  }

  getCustomers() {
    this.customersService.getAll().subscribe({
      next: (customers: any) => {
        this.customers = customers.map((c: any) => { return {...c, address: c.addresses[0]} } );
      },
      error: (error) => console.log(error)
    });
  }

}
