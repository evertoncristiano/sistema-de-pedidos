import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseService {

  constructor(httpService: HttpService) {
    super(httpService, "products")
  }

}
