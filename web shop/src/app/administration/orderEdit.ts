import { Component } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { HttpRequests } from "../sources/http.requests";
import { Orderstack } from "../sources/orderstack";


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

    constructor(private router: Router, private httpReq: HttpRequests, private orderstack: Orderstack, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.orders = new Array<Order>();
        this.order = new Order;
        this.orders = this.orderstack.getOrders();
        this.date = new Date();
        this.articles = new Array<Product>();
    }
    
    getOrders(): Order[] {
        return this.orders;
    }

    getOrder(id: number) : Product {
        this.order = this.orders.find(o => o.id == id);
        this.date = this.order.date;
        this.articles = this.order.articles;
        return this.order;
    }

    updateOrder(order: Order, id: number) {
        order.date = this.date;
        order.articles = this.articles;
        this.httpReq.putOrder(order, id).subscribe();
    }


    
 
}