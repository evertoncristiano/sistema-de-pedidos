import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { AddressModel } from 'src/app/models/address.model';
import { CustomerModel } from 'src/app/models/customer.model';
import { OrderItemModel } from 'src/app/models/order-item.model';
import { OrderModel } from 'src/app/models/order.model';
import { ProductModel } from 'src/app/models/products.model';
import { CustomersService } from 'src/app/services/customers.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.page.html',
  styleUrl: './orders-form.page.scss'
})
export class OrdersFormPage implements OnInit {
  pageTitle = ''

  id?: string = undefined
  order: OrderModel = new OrderModel()

  customers: CustomerModel[] = []
  selectedCustomer: CustomerModel

  quantity: number
  price: number

  products: ProductModel[] = [
    { id: "1", description: "Marmita", price: 19.00 },
    { id: "2", description: "Marmita G", price: 22.00 },
    { id: "3", description: "Coca-Cola 2LT", price: 12.00 },
    { id: "4", description: "Guaraná Fruki 2LT", price: 10.00 },
    { id: "5", description: "Coca-Cola 350ml", price: 6.00 },

  ]
  selectedProduct: ProductModel

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private orderService: OrdersService,
    private customerService: CustomersService) {
    this.customerService.getAll().subscribe((result: any) => {
      this.customers = result.map((customer: any) => {
        return new CustomerModel({
          address: new AddressModel(customer.addresses[0]),
          ...customer
        })
      })
    })

    this.customerService.getAll().subscribe((result: any) => {
      this.customers = result.map((customer: any) => {
        return new CustomerModel({
          address: new AddressModel(customer.addresses[0]),
          ...customer
        })
      })
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (!this.id) {
      this.pageTitle = 'Novo Pedido'
      this.order = new OrderModel()
    } else {
      this.pageTitle = 'Editando Pedido'
      
      this.orderService.getById(this.id).subscribe(
        (data: any) => {
          this.order = new OrderModel(data)
        })
    }
  }

  changeCustomer() {
    this.order.street = this.selectedCustomer.address.street;
    this.order.number = this.selectedCustomer.address.number;
    this.order.district = this.selectedCustomer.address.district;
    this.order.city = this.selectedCustomer.address.city;
  }

  changeProduct() {
      this.quantity = 1
      this.price = this.selectedProduct.price
  }

  getItemByProductId(id: string) {
    return this.order.items.find(x => x.product.id == id)
  }

  addItem() {
    if (!this.selectedProduct)
      return alert("Selecione um produto")

    var item = this.getItemByProductId(this.selectedProduct.id)

    if (item && this.price == item.unitPrice) {
      console.log(typeof(item.quantity))
      console.log(typeof(this.quantity))

      item.quantity += this.quantity
      item.totalPrice = item.quantity * item.unitPrice
    } else {
      var item = new OrderItemModel({
        product: this.selectedProduct,
        quantity: this.quantity,
        unitPrice: this.price,
        totalPrice: this.quantity * this.price,
        order: null
      })
  
      this.order.items.push(item)  
    }

    this.resetProductInputs()
  }

  resetProductInputs() {
    this.selectedProduct = null
    this.price = null
    this.quantity = null
  }

  editItem(item: OrderItemModel) {
      item.totalPrice = item.quantity * item.unitPrice
  }

  removeItem(index: number) {
    this.order.items.splice(index, 1)
  }

  save() {
    this.submitted = true

    if (this.order.id) {
      this.orderService.update(this.order.id, this.order)
    } else {
      this.orderService.create(this.order)
    }

    this.router.navigate(['/orders'])
  }

  cancel(): void {
    this.router.navigate(['/orders'])
  }
}
