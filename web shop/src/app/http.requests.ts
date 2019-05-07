import { OnInit, Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Order } from "./order";
import { Http, Request, RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class HttpRequests implements OnInit {
    public order: Order;
    orders: Order[];
    products: Observable<Product[]>;
    product: Product;
    token: string;
    auth: boolean;

    constructor(private http: Http) {
        this.products = new Observable<Product[]>();
        this.orders = new Array<Order>();
    }

    ngOnInit() {}

    getProducts(): Observable<Product[]> {
        let req = new Request({
            method: RequestMethod.Get,
            url: 'http://localhost:3500/products'
        });
        return this.http.request(req).map(response => response.json());
    }

    putProduct(product: Product): Observable<Product> {
        this.auth = true;
        let req = new Request({
            method: RequestMethod.Put,
            url: `http://localhost:3500/products/${product.id}`,
            body: product
            
        });
        if (this.auth && this.token != null) {
            req.headers.set("Authorization", `Bearer<${this.token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

    postProduct(product: Product): Observable<Product> {
        this.auth = true;
        let req = new Request({
            method: RequestMethod.Post,
            url: `http://localhost:3500/products`,
            body: product
        });
        if (this.auth && this.token != null) {
            req.headers.set("Authorization", `Bearer<${this.token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

    deleteProduct(id: number): Observable<Product> {
        this.auth = true;
        let req = new Request({
            method: RequestMethod.Delete,
            url: `http://localhost:3500/products/${id}`,
            body: null
        });
        if (this.auth && this.token != null) {
            req.headers.set("Authorization", `Bearer<${this.token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

    getOrders(): Observable<Order[]> {
        this.auth = true;
        let req = new Request({
            method: RequestMethod.Get,
            url: `http://localhost:3500/orders`,
            body: null
        });
        if (this.auth && this.token != null) {
            req.headers.set("Authorization", `Bearer<${this.token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

    postOrder(order: Order): Observable<Order> {
        this.auth = true;
        let req = new Request({
            method: RequestMethod.Post,
            url: `http://localhost:3500/orders`,
            body: order
        });
        return this.http.request(req).map(response => response.json());
    }

    putOrder(order: Order): Observable<Order> {
        this.auth = true;
        let req = new Request({
            method: RequestMethod.Put,
            url: `http://localhost:3500/orders/${order.ordernumber}`,
            body: order
        });
        if (this.auth && this.token != null) {
            req.headers.set("Authorization", `Bearer<${this.token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

    deleteOrder(id: number): Observable<Order> {
        this.auth = true;
        let req = new Request({
            method: RequestMethod.Delete,
            url: `http://localhost:3500/orders/${id}`,
            body: null
        });
        if (this.auth && this.token != null) {
            req.headers.set("Authorization", `Bearer<${this.token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

}