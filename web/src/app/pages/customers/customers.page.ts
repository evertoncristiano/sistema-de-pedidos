import { Component, inject, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { CustomerModel } from '../../models/customer.model';
import { Router } from '@angular/router';
import { AddressModel } from '../../models/address.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrl: './customers.page.css'
})
export class CustomersPage implements OnInit {
  
  customers: CustomerModel[] = []
  
  constructor(private router: Router, private customerService: CustomersService) {
  }

  ngOnInit() {
    this.getItems();
  }

  ngOnChanges() {
    this.getItems();
  }

  getItems() {
    this.customerService.getAll().subscribe((result: any) => {
      this.customers = result.map((customer: any) => {
        return new CustomerModel({
          address: new AddressModel(customer.addresses[0]),
          ...customer
        })
      })
    })
  }

  editCustomer(id?: string) {
    this.router.navigate([`customers/edit/${id}`])
  }

  addNewCustomer() {
    this.router.navigate(['customers/new']);
  }
}
