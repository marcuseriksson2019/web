import { Component } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { Order } from "../models/order";
import { Orderstack } from "../sources/orderstack";
import { environment } from "../../environments/environment";


@Component({
    templateUrl: "orders.html",
    styleUrls: ["orders.css"],
    selector: 'orders'
})

export class Orders {
    public order: Order;
    public orders: Order[];
    private name = environment.appName;

    constructor(private router: Router, private orderstack: Orderstack, private activeroute: ActivatedRoute) {}

    getName() {
        return this.name;
    }

    getOrders(): Order[] {
        return this.orderstack.getOrders();
    }

    deleteOrder(id: number) {
        this.orderstack.deleteOrder(id);
    }

 
}