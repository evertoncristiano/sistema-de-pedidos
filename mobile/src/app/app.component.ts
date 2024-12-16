import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Clientes', url: '/customers', icon: 'people' },
    { title: 'Produtos', url: '/products', icon: 'cube' },
    { title: 'Pedidos', url: '/orders', icon: 'file-tray-full' },
    
  ];
  constructor() {}
}
