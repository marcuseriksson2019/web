import { Injectable } from "@angular/core";
import { Order } from "../models/order";
import { HttpRequests } from "./http.requests";


@Injectable()
export class Orderstack {
    public orders: Order[];
    public order: Order;

    constructor(private httpReq: HttpRequests) {
        this.orders = new Array<Order>();
        this.httpReq.getOrders().subscribe(data => {  
            this.orders = data;
        });
    }
    
    postOrder(order: Order) {
        this.httpReq.postOrder(order).subscribe();
        this.orders.push(order);
    }

    getOrders() {
        return this.orders;
    }

    getData(): Order[] {
        return this.orders;
    }

    deleteOrder(id: number) {
        this.getOrders().splice(id, 1);
        this.httpReq.deleteOrder(id).subscribe(data => {
            this.order = data;
        });
    }

    putOrder(order: Order, id: number) {
        this.httpReq.putOrder(order, id).subscribe();
    }

}