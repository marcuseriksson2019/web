import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { Order } from "./order";
import { Product } from "./product.model";
import { HttpRequests } from "./http.requests";

@Component({
    templateUrl: "orders.html",
    styleUrls: ["orders.css"],
    selector: 'orders'
})

export class Orders {
    editing: boolean = false;
    order: Order = new Order();
    public orders: Order[];
    product: Product;
    products: Product[];
    editable: boolean = false;
    private initialized: boolean = false;

    constructor(private router: Router, activeRoute: ActivatedRoute, private httpReq: HttpRequests) {
        this.orders = new Array<Order>();
    }

    getOrders(): Order[] {
        if (!this.initialized) {
            this.initialized = true;
            this.httpReq.getOrders().subscribe(data => this.orders = data);
            console.log(this.orders);
        }
        return this.orders;
    }

    update(form: NgForm) {
        this.router.navigateByUrl("/admin/products");
    }

    deleteOrder(id: number) {
        this.getOrders().splice(id+1, 1);
        this.httpReq.deleteOrder(id+1).subscribe(data => {
            this.order = data;
        });
    }

    editOrder(id: number) {
        this.order = this.getOrders().find(p => p.ordernumber == id + 1);
        return this.order;
    }

    updateOrder(order: Order) {
        console.log(order);
        this.httpReq.putOrder(this.order).subscribe(p => {
            this.getOrders().splice(this.getOrders().
                findIndex(p => p.ordernumber == this.order.ordernumber), 1, this.order);
        });
    }
 
}