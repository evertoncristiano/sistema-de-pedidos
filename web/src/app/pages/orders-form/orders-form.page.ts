import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { AddressModel } from 'src/app/models/address.model';
import { CustomerModel } from 'src/app/models/customer.model';
import { OrderItemModel } from 'src/app/models/order-item.model';
import { OrderModel } from 'src/app/models/order.model';
import { ProductModel } from 'src/app/models/products.model';
import { CustomersService } from 'src/app/services/customers.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

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

  products: ProductModel[] = []
  selectedProduct: ProductModel

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrdersService,
    private customerService: CustomersService,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllCustomers()
    this.getAllProducts()

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
          this.selectedCustomer = new CustomerModel(data.customer)
        })
    }
  }

  changeCustomer() {
    this.order.customerId = this.selectedCustomer.id;
    this.order.street = this.selectedCustomer.address.street;
    this.order.number = this.selectedCustomer.address.number;
    this.order.district = this.selectedCustomer.address.district;
    this.order.city = this.selectedCustomer.address.city;
    this.order.state = this.selectedCustomer.address.state;
    this.order.country = this.selectedCustomer.address.country;
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
      item.quantity += this.quantity
      item.totalPrice = item.quantity * item.unitPrice
    } else {
      var item = new OrderItemModel({
        productId: this.selectedProduct.id,
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

  getAllCustomers() {
    this.customerService.getAll().subscribe((result: any) => {
      this.customers = result.map((customer: any) => {
        return new CustomerModel({
          address: new AddressModel(customer.addresses[0]),
          ...customer
        })
      })
    })
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((result: any) => {
      this.products = result.map((data: any) => {
        return new ProductModel(data)
      })
    })
  }

  save() {
    this.orderService.save(this.order)
    this.router.navigate(['/orders'])
  }

  cancel(): void {
    this.router.navigate(['/orders'])
  }
}
