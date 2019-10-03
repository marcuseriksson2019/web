import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { Order } from "../models/order";
import { Orderstack } from "../sources/orderstack";


@Component({
    templateUrl: "orders.html",
    styleUrls: ["orders.css"],
    selector: 'orders'
})

export class Orders implements OnInit {
    public order: Order;
    public orders: Order[];
    editable: boolean = false;
    id: number;

    constructor(private router: Router, private orderstack: Orderstack, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.order = new Order;
        this.orders = new Array<Order>();
        this.orders = this.orderstack.getOrders();
    }

    ngOnInit() {
        return this.orderstack.getOrders();
    }
    
    getOrders(): Order[] {
        return this.orderstack.getOrders();
    }

    deleteOrder(id: number) {
        this.orderstack.deleteOrder(id);
    }

 
}