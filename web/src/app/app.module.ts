import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { FormsModule } from '@angular/forms';
import { CustomersPage } from './pages/customers/customers.page';
import { CustomersFormPage } from './pages/customers-form/customers-form.page';
import { OrdersPage } from './pages/orders/orders.page';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
    declarations: [
        AppComponent,
        CustomersPage,
        CustomersFormPage,
        OrdersPage,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        CommonModule,
        FormsModule,

        CardModule,
        ToolbarModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        PanelModule,
        MenubarModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
