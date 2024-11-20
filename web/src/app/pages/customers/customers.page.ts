import { Component, inject } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { CustomerModel } from '../../models/customer.model';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.page.html',
  styleUrl: './customers.page.css'
})
export class CustomersPage {
  constructor(private customerService: CustomersService) {
  }

  createNewCustomer() {
    return this.customerService.getById("3b7b5a80-7bfe-4429-956e-0049bf3e4ef4");
  }
}
