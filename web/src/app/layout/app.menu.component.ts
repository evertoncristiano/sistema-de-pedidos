import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Cadastros',
                items: [
                    { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/customers'] },
                    { label: 'Produtos', icon: 'pi pi-fw pi-box', routerLink: ['/products'] },
                ]
            },
            {
                label: 'Pedidos',
                items: [
                    { label: 'Novo Pedido', icon: 'pi pi-fw pi-plus', routerLink: ['/orders/new'] },
                    { label: 'Pedidos', icon: 'pi pi-fw pi-table', routerLink: ['/orders'] },
                    { label: 'Painel', icon: 'pi pi-fw pi-desktop', routerLink: ['ordes/panel'] },
                ]
            },
        ];
    }
}
