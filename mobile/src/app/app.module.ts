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
import { ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListCustomersComponent,
    FormCustomersComponent,
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
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
