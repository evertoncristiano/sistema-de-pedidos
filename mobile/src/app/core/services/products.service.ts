import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({ providedIn: 'root'})
export class ProductsService extends BaseService {
    constructor(httpService: HttpService) {
        super(httpService, 'products')
    }
} 