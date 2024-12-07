import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { OrderModel } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrl: './orders.page.css'
})
export class OrdersPage implements OnInit {
  loading = true
  orders: OrderModel[] = []
  selected: OrderModel

  tools: MenuItem[]
  
  constructor(private router: Router, private ordersService: OrdersService) {
    this.tools = [
      { label: "Novo", icon: "pi pi-plus", command: () => this.add()},
      { label: "Editar", icon: "pi pi-pencil", command: () => this.edit() },
      { label: "Excluir", icon: "pi pi-trash", disabled: true},
    ]

    this.getItems()
  }

  ngOnInit() {
  }



  getItems() {
    this.ordersService.getAll().subscribe({
      next: (result: any) => {
        this.orders = result.map((customer: any) => {
          return new OrderModel(customer)
        })
      },
      error: () => {},
      complete: () => this.loading = false
    })
  }

  edit() {
    if (this.selected)
      this.router.navigate([`orders/edit/${this.selected.id}`])
  }

  add() {
    this.router.navigate(['orders/new'])
  }
}
