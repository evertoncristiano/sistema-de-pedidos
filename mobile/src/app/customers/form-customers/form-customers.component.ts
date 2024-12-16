import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';
import { Customer } from 'src/app/core/entities/customer';
import { CustomersService } from 'src/app/core/services/customers.service';

@Component({
  selector: 'app-form-customers',
  templateUrl: './form-customers.component.html',
})
export class FormCustomersComponent implements OnInit {
  public title: string = 'Novo Cliente';

  readonly phoneMask: MaskitoOptions = {
    mask: [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();

  customerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    telephone: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      number: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
    }),
  });
  
  constructor(
    private locale: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomersService) { }

  ngOnInit() {
    var id = null;
    this.activatedRoute.params
      .subscribe(params => id = params['id']);

    if (id) {
      this.title = 'Editando Cliente';

      this.customerService.getById(id).subscribe({
        next: (customer: any) => {
          var address = customer.addresses[0];

          this.customerForm.patchValue({
            id: customer.id,
            name: customer.name,
            telephone: customer.telephone,
            address: {
              street: address?.street,
              number: address?.number,
              district: address?.district,
              city: address?.city
            }
          });
        }
      });
    }
  }

  save() {
      this.customerService.save(this.customerForm.value as Customer).subscribe({
        next: () => {
          console.log("O cliente foi salvo com sucesso");
          this.customerService.getCustomers();
          this.router.navigateByUrl('customers');
        },
        error: (error) => console.log(error)
      });
  }

  cancel() {
      this.locale.back();
  }

}
