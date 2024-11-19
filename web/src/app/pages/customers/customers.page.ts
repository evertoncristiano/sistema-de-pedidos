import { Component, inject } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.page.html',
  styleUrl: './customers.page.css'
})
export class CustomersPage {
  private customerService = inject(CustomersService)
}
