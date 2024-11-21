import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CustomersPage } from './pages/customers/customers.page';
import { CustomersFormPage } from './pages/customers-form/customers-form.page';
import { OrdersPage } from './pages/orders/orders.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        RouterModule.forRoot(routes), 
        BrowserModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        CustomersPage,
        CustomersFormPage,
        OrdersPage,

        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes), 
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }