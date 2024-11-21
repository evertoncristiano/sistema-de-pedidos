import { Routes } from '@angular/router';
import { CustomersPage } from './pages/customers/customers.page';
import { OrdersPage } from './pages/orders/orders.page';
import { ReportsPage } from './pages/reports/reports.page';
import { CustomersFormPage } from './pages/customers-form/customers-form.page';

export const routes: Routes = [
    { path: '', redirectTo: 'orders', pathMatch: 'full'},
    { 
        path: 'customers',
        children: [
            {
                path: '',
                component: CustomersPage
            },
            {
                path: 'new',
                component: CustomersFormPage 
            },
            {
                path: 'edit/:id',
                component: CustomersFormPage 
            }
        ] 
    },
    { path: 'orders', component: OrdersPage },
    { path: 'reports', component: ReportsPage },
];
