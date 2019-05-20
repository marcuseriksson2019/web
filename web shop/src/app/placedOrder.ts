import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "./product.model";
import { CartModel } from "./cart.model";
import { Order } from "./order";
import { OrderModel } from "./order.model";
import { Cart } from "./cart";

@Component({
    templateUrl: "placedOrder.html",
    styleUrls: ["placedOrder.css"],
    selector: 'placedOrder'
})

@Injectable()
export class PlacedOrder {

    private orders: Order[];
    public totalSum: number;
    public VAT: number;
    private products: Product[];

    constructor(private router: Router, private cartSource: CartModel, private orderModel: OrderModel, private cart: Cart) {  
        this.totalSum = 0;
        this.VAT=0;
        this.products = new Array<Product>();    
        this.cartSource.getData().forEach(p => { this.products.push(p); this.totalSum += Math.ceil(p.price*p.quantity); this.VAT += Math.ceil(p.price*p.quantity*0.3); });
        this.orders = new Array<Order>()
        this.orderModel.getData().forEach(p =>  this.orders.push(p) );
    }

    getCart() {
        return this.products;
    }

    


}