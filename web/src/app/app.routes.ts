import { Routes } from '@angular/router';
import { CustomersPage } from './pages/customers/customers.page';
import { OrdersPage } from './pages/orders/orders.page';
import { ReportsPage } from './pages/reports/reports.page';

export const routes: Routes = [
    { path: 'customers', component: CustomersPage },
    { path: 'orders', component: OrdersPage },
    { path: 'reports', component: ReportsPage },
];
