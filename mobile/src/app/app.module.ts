import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, IonList } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { FormCustomersComponent } from './customers/form-customers/form-customers.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { FormOrdersComponent } from './orders/form-orders/form-orders.component';
import { ToastComponent } from './core/components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    HomeComponent,
    ListCustomersComponent,
    FormCustomersComponent,
    ListOrdersComponent,
    FormOrdersComponent,
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaskitoDirective,
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
    },
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
