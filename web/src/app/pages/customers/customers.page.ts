import { Component, inject, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { CustomerModel } from '../../models/customer.model';
import { Router } from '@angular/router';
import { AddressModel } from '../../models/address.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrl: './customers.page.css'
})
export class CustomersPage implements OnInit {
  loading = true
  customers: CustomerModel[] = []
  selectedCustomer: CustomerModel

  tools: MenuItem[]
  
  constructor(private router: Router, private customerService: CustomersService) {
    this.tools = [
      { label: "Novo", icon: "pi pi-plus", command: () => this.add()},
      { label: "Editar", icon: "pi pi-pencil", command: () => this.edit() },
      { label: "Excluir", icon: "pi pi-trash", disabled: true},
    ]
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.customerService.getAll().subscribe((result: any) => {
      this.customers = result.map((customer: any) => {
        this.loading = false
        return new CustomerModel({
          address: new AddressModel(customer.addresses[0]),
          ...customer
        })
      })
    })
  }

  edit() {
    if (this.selectedCustomer)
      this.router.navigate([`customers/edit/${this.selectedCustomer.id}`])
  }

  add() {
    this.router.navigate(['customers/new']);
  }
}
