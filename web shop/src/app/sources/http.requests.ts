import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Product } from "../models/product";
import { Order } from "../models/order";
import { User } from "../models/user";
import { Review } from "../models/review";
import { Http, Request, RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";
import { Component, ViewChild } from "@angular/core";

@Injectable()
export class HttpRequests {
    token: string;
    userToken: string;
    hostURL: string = 'http://localhost:3500/';
    userExists: User;
    users: User[];

    constructor(private http: Http) {
	this.users = new Array<User>();
    }

    login(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.hostURL + 'login',
            body: { name: user, password: pass }
        })).map(response => {
            let r = response.json();
            this.token = r.success ? r.token : null;
            return r.success;
        });
    }

    userLogin(user: string, pass: string): Observable<boolean> {
        this.getUsers().subscribe(data => this.users = data);
        this.userExists = this.users.find(u => u.username == user && u.password == pass);
        if (this.userExists) {
            return this.http.request(new Request({
                method: RequestMethod.Post,
                url: this.hostURL + 'userLogin',
                body: { name: user, password: pass }
            })).map(response => {
                let r = response.json();
                this.userToken = r.success ? r.token : null;
                return r.success;
            });
        }
    }

    getCurrentUser() {
        return this.userExists;
    }

    getProducts(): Observable<Product[]> {
        return this.makeRequest(RequestMethod.Get, `http://localhost:3500/products`);
    }

    putProduct(product: Product, id: number): Observable<Product> {
        return this.makeRequest(RequestMethod.Put, `http://localhost:3500/products/${id}`, product, true);
    }

    postProduct(product: Product): Observable<Product> {
        return this.makeRequest(RequestMethod.Post, `http://localhost:3500/products`, product, true);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.makeRequest(RequestMethod.Delete, `http://localhost:3500/products/${id}`, true);
    }

    getOrders(): Observable<Order[]> {
        return this.makeRequest(RequestMethod.Get, `http://localhost:3500/orders`, true);
    }

    postOrder(order: Order): Observable<Order> {
        return this.makeRequest(RequestMethod.Post, `http://localhost:3500/orders`, order, true);
    }

    putOrder(order: Order, id: number): Observable<Order> {
        return this.makeRequest(RequestMethod.Put, `http://localhost:3500/orders/${id}`, order, true);
    }

    deleteOrder(ordernumber: number): Observable<Order> {
        return this.makeRequest(RequestMethod.Delete, `http://localhost:3500/orders/${ordernumber}`, true);
    }

    newUser(user: User): Observable<User> {
        return this.makeRequest(RequestMethod.Post, `http://localhost:3500/users`, user);
    }

    getUsers(): Observable<User[]> {
        return this.makeRequest(RequestMethod.Get, `http://localhost:3500/users`);
    }

    getUser(id: number): Observable<User[]> {
        return this.makeRequest(RequestMethod.Get, `http://localhost:3500/users/${id}`);
    }

    putUser(user: User, id: number): Observable<User> {
        return this.makeRequest(RequestMethod.Put, `http://localhost:3500/users/${id}`, user, true);
    }

    getUserOrders(): Observable<Order[]> {
        return this.makeRequest(RequestMethod.Get, `http://localhost:3500/orders`, true);
    }

    deleteUser(id: number): Observable<User> {
        return this.makeRequest(RequestMethod.Delete, `http://localhost:3500/users/${id}`, true);
    }

    getReviews(): Observable<Review[]> {
        return this.makeRequest(RequestMethod.Get, `http://localhost:3500/reviews`);
    }

    postReview(review: Review): Observable<Review> {
        return this.makeRequest(RequestMethod.Post, `http://localhost:3500/reviews`, review, true);
    }

    makeRequest(verb: RequestMethod, url: string, body?: any, auth: boolean = false): Observable<any> {
        let req = new Request({ 
             method: verb, 
             url: url, 
             body: body
        });
        if (auth && this.token != null) {
            req.headers.set("Authorization", `Bearer<${this.token}>`);
        }
        return this.http.request(req).map(response => response.json());
    }

}