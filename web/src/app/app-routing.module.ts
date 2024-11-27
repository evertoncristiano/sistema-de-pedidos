import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { CustomersPage } from './pages/customers/customers.page';
import { CustomersFormPage } from './pages/customers-form/customers-form.page';
import { OrdersPage } from './pages/orders/orders.page';
import { ReportsPage } from './pages/reports/reports.page';
import { OrdersFormPage } from './pages/orders-form/orders-form.Page';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', redirectTo: 'orders', pathMatch: 'full' },
                    {
                        path: 'customers',
                        children: [
                            { path: '', component: CustomersPage },
                            { path: 'new', component: CustomersFormPage },
                            { path: 'edit/:id', component: CustomersFormPage }
                        ]
                    },
                    { 
                        path: 'orders',
                        children: [
                            { path: '', component: OrdersPage },
                            { path: 'new', component: OrdersFormPage },
                            { path: 'edit/:id', component: OrdersFormPage }
                        ]
                    },
                    { path: 'reports', component: ReportsPage },
                ]
            },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
