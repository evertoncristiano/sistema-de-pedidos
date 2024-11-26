import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrl: './orders.page.css'
})
export class OrdersPage {
  orders = [
    { date: new Date(2024,12,1).toLocaleDateString('pt-BR'), customer: 'José da esquina', status: 'Pendente'},
    { date: new Date(2024,12,1).toLocaleDateString('pt-BR'), customer: 'Maria Aparecida', status: 'Em trânsito'},
  ]

}
