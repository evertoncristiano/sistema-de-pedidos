import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { AddressModel } from '../../models/address.model';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.page.html',
  styleUrl: './customers-form.page.css'
})
export class CustomersFormPage implements OnInit {
  pageTitle = ''

  id?: string = undefined
  customer: CustomerModel = new CustomerModel()
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomersService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (!this.id) {
      this.pageTitle = 'Novo Cliente'
      this.customer = new CustomerModel()
    } else {
      this.pageTitle = 'Editando Cliente'
      
      this.customerService.getById(this.id).subscribe(
        (data: any) => {
          this.customer = new CustomerModel({
            address: new AddressModel(data.addresses[0]),
            ...data
          })
        })
    }
  }

  save() {
    this.customerService.save(this.customer)

    this.router.navigate(['/customers'], { state: { reload: true }})
  }

  cancel(): void {
    this.router.navigate(['/customers'])
  }
}
