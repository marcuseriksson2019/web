import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from "../models/product";
import { Order } from "../models/order";
import { Http, Request, RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class HttpRequests {

    constructor(private http: Http) {}

    login(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: 'http://localhost:3500/login',
            body: { name: user, password: pass }
        })).map(response => response.json());
    }

    getProducts(): Observable<Product[]> {
        let req = new Request({
            method: RequestMethod.Get,
            url: 'http://localhost:3500/products'
        });
        return this.http.request(req).map(response => response.json());
    }

    putProduct(product: Product): Observable<Product> {
        let req = new Request({
            method: RequestMethod.Put,
            url: `http://localhost:3500/products/${product.id}`,
            body: product
            
        });
        return this.http.request(req).map(response => response.json());
    }

    postProduct(product: Product): Observable<Product> {
        let req = new Request({
            method: RequestMethod.Post,
            url: `http://localhost:3500/products`,
            body: product
        });
        return this.http.request(req).map(response => response.json());
    }

    deleteProduct(id: number): Observable<Product> {
        let req = new Request({
            method: RequestMethod.Delete,
            url: `http://localhost:3500/products/${id}`,
            body: null
        });
        return this.http.request(req).map(response => response.json());
    }

    getOrders(): Observable<Order[]> {
        let req = new Request({
            method: RequestMethod.Get,
            url: `http://localhost:3500/orders`,
            body: null
        });
        return this.http.request(req).map(response => response.json());
    }

    postOrder(order: Order): Observable<Order> {
        let req = new Request({
            method: RequestMethod.Post,
            url: `http://localhost:3500/orders`,
            body: order
        });
        return this.http.request(req).map(response => response.json());
    }

    putOrder(order: Order, id: number): Observable<Order> {
        let req = new Request({
            method: RequestMethod.Put,
            url: `http://localhost:3500/orders/${id}`,
            body: order
        });
        return this.http.request(req).map(response => response.json());
    }

    deleteOrder(ordernumber: number): Observable<Order> {
        let req = new Request({
            method: RequestMethod.Delete,
            url: `http://localhost:3500/orders/${ordernumber}`,
            body: null
        });
        return this.http.request(req).map(response => response.json());
    }

}