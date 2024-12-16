import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class CustomersService extends BaseService {

  constructor(httpService: HttpService) {
    super(httpService, "customers")
  }
}
