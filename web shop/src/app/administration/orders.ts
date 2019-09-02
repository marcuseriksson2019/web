import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { Order } from "../models/order";
import { HttpRequests } from "../sources/http.requests";


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

    constructor(private router: Router, private httpReq: HttpRequests, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.order = new Order;
        this.orders = new Array<Order>();
        this.httpReq.getOrders().subscribe(data => {
            this.orders = data;
        });
    }

    ngOnInit() {
        this.httpReq.getOrders().subscribe(data => {
            this.orders = data;
        });
    }
    
    getOrders(): Order[] {
        return this.orders;
    }

    deleteOrder(id: number) {
        this.getOrders().splice(id, 1);
        this.httpReq.deleteOrder(id).subscribe(data => {
            this.order = data;
        });
    }

 
}