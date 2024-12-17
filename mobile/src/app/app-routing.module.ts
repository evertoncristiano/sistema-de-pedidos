import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { HomeComponent } from './home/home/home.component';
import { FormCustomersComponent } from './customers/form-customers/form-customers.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { FormOrdersComponent } from './orders/form-orders/form-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'customers',
    children: [
      { path: '', component: ListCustomersComponent },
      { path: 'new', component: FormCustomersComponent },
      { path: 'edit/:id', component: FormCustomersComponent },
    ]
  },
  {
    path: 'orders',
    children: [
      { path: '', component: ListOrdersComponent },
      { path: 'new', component: FormOrdersComponent },
      { path: 'edit/:id', component: FormOrdersComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
