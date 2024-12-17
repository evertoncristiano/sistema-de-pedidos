import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Customer } from 'src/app/core/models/customer';
import { Order } from 'src/app/core/models/order';
import { OrderItem } from 'src/app/core/models/order-item';
import { CustomersService } from 'src/app/core/services/customers.service';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Product } from 'src/app/core/models/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
    selector: 'app-form-orders',
    templateUrl: './form-orders.component.html',
})
export class FormOrdersComponent implements OnInit {
    title: string = 'Novo Pedido';

    customers: Customer[] = [];
    items: OrderItem[] = [];
    products: Product[] = [];
    total: number = 0;

    orderForm = new FormGroup({
        id: new FormControl(''),
        customerId: new FormControl(''),
        telephone: new FormControl(''),
        street: new FormControl(''),
        number: new FormControl(''),
        district: new FormControl(''),
        city: new FormControl(''),
    });

    constructor(
        private locale: Location,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private ordersService: OrdersService,
        private customersService: CustomersService,
        private productsService: ProductsService
    ) { }

    ngOnInit() {
        this.customersService.getAll().subscribe((x: any) => this.customers = x);
        this.getAllProducts();

        var id = null;
        this.activatedRoute.params
            .subscribe(params => id = params['id']);

        if (id) {
            this.title = 'Editando Pedido';

            this.ordersService.getById(id).subscribe({
                next: (order: any) => {
                    this.orderForm.patchValue({
                        customerId: order.customer.id,
                        ...order
                    });

                    this.items = order.items.map((x: any) => {
                        x.productId = x.product.id;
                        return x;
                    });
                    this.calculateTotalOrder();
                    this.setCustomerOnForm(order.customer.id);
                    this.orderForm.get('customerId')?.disable();
                    this.orderForm.get('telephone')?.disable();
                }
            });
        }
    }

    onChangeCustomer(event: any) {
        this.setCustomerOnForm(event.detail.value);
    }

    setCustomerOnForm(id: string) {
        this.customersService.getById(id).subscribe((customer: any) => {
            var address = customer.addresses[0];

            this.orderForm.patchValue({
                telephone: customer.telephone,
                street: address.street,
                number: address.number,
                district: address.district,
                city: address.city,
            });
        });
    }

    removeItem(item: OrderItem) {
        var index = this.items.findIndex(item => item === item);
        this.items.splice(index, 1);
        this.calculateTotalOrder();
    }

    calculateTotalOrder() {
        this.total = 0;
        this.items.map(x => this.total += x.totalPrice);
    }

    save() {
        var order = { ...this.orderForm.value } as Order;
        order.state = "RS";
        order.country = "Brasil";
        order.date = new Date;

        order.items = this.items;
        console.log(this.items)

        this.ordersService.save(order).subscribe({
            next: () => {
                console.log("O pedido foi salvo com sucesso");
                this.ordersService.getOrders();
                this.router.navigateByUrl('orders');
            },
            error: (error) => console.log(error)
        });
    }

    cancel() {
        this.locale.back();
    }


    //#region AddItemModal
    @ViewChild(IonModal) modal: IonModal;
    item: OrderItem = new OrderItem();
    selectedProduct: Product;  

    getAllProducts() {
        this.productsService.getAll().subscribe((products: any) => this.products = products);
    }

    onChangeProductAddItemModal(event: any) {
        var productId = event.detail.value;

        this.productsService.getById(productId).subscribe((product: any) => {
            this.item.productId = product.id
            this.item.product = product;
            this.item.quantity = 1;
            this.item.unitPrice = product.price;
        });
    }

    cancelAddItemModal() {
        this.item = new OrderItem();
        this.modal.dismiss(null, 'cancel');
    }

    addItem() {
        if (!this.item.product || !this.item.quantity || !this.item.unitPrice)
            return console.log('Erro ao adicionar um item');

        var item = this.items.find(x =>
            x.product?.id == this.item.product?.id &&
            x.unitPrice == this.item.unitPrice
        )

        if (!item) {
            this.item.totalPrice = this.item.quantity * this.item.unitPrice;
            this.items.push(this.item);
        } else {
            item.quantity += this.item.quantity;
            item.unitPrice = this.item.unitPrice;
            item.totalPrice = item.quantity * item.unitPrice;
        }

        this.item = new OrderItem();
        this.selectedProduct = new Product();
        
        this.calculateTotalOrder();
        this.modal.dismiss(this.item, 'confirm');
    }
    //#endregion AddItemModal
}
