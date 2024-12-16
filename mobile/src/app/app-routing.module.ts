import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { HomeComponent } from './home/home/home.component';
import { FormCustomersComponent } from './customers/form-customers/form-customers.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'customers',
    children: [
      { path: '', component: ListCustomersComponent },
      { path: 'new', component: FormCustomersComponent },
      { path: 'edit/:id', component: FormCustomersComponent },
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
