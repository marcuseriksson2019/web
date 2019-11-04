import { Component } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { Orderstack } from "../sources/orderstack";
import { environment } from "../../environments/environment";

@Component({
    templateUrl: "orderEdit.html",
    styleUrls: ["orderEdit.css"],
    selector: 'orderEdit'
})

export class OrderEdit {
    public orders: Order[];
    order: Order;
    product: Product;
    articles: Product[];
    private date: any;
    id: number;
    private name = environment.appName;

    constructor(private router: Router, private orderstack: Orderstack, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.date = new Date();
        this.articles = new Array<Product>();
    }

    getName() {
        return this.name;
    }
    
    getOrders(): Order[] {
        return this.orderstack.getOrders();
    }

    getOrder(id: number) : Product {
        this.order = this.getOrders().find(o => o.id == id);
        this.date = this.order.date;
        this.articles = this.order.articles;
        return this.order;
    }

    updateOrder(order: Order, id: number) {
        order.date = this.date;
        order.articles = this.articles;
        this.orderstack.putOrder(order, id);
    }

 
}