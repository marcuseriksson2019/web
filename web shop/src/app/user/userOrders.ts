import { Component, ViewChild, OnInit } from "@angular/core";
import { Router,  ActivatedRoute  } from "@angular/router";
import { User } from "../models/user";
import { Order } from "../models/order";
import { Review } from "../models/review";
import { Accounts } from "../sources/accounts";
import { Product } from "../models/product";
import { UserLogin } from "./userLogin";
import { NgForm } from "@angular/forms";
import { concat } from "rxjs/operators";
import { Orderstack } from "../sources/orderstack";
import { Reviewstack } from "../sources/reviewstack";


@Component({
    templateUrl: "userOrders.html",
    selector: 'users',
    styleUrls: ["userOrders.css"]
})

export class UserOrders implements OnInit { 
    public username: string;
    public password: string;
    public loggedIn: boolean = false;
    public errorMsg: string;
    public review: Review;
    public user: User;
    public users: User[];
    public orders: Order[];
    public order: Order;
    product: Product;
    products: Product[];
    private initialized: boolean = false;
    private date: any;
    private ratingstars: string[] = ['*****', '****', '***', '**', '*'];
    id: number;

    @ViewChild('form') Form;

    constructor(private router: Router, private accounts: Accounts, private orderstack: Orderstack, private reviewstack: Reviewstack, private userlogin: UserLogin, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.date = new Date();
        this.product = new Product();
        this.orders = new Array<Order>();
        this.review = new Review;
        this.order = new Order;
        this.users = new Array<User>();
        this.users = this.accounts.users;               
        this.orders = this.orderstack.getOrders();
        this.user = this.users[this.accounts.id - 1];
    }

    ngOnInit() {
        if (!this.orders) {
            this.getOrders();
        }
    }
    
    getOrders(): Order[] {
        return this.orders.filter(o => o.email == this.getUser().email);
    }

    getUsers() {
        return this.users;
    }

    getUser() {
        this.user = this.getUsers()[this.accounts.id -1];
        return this.user;
    }

    logout() {
        this.loggedIn = false;
        this.accounts.loggedinUser = null;
        this.accounts.loggedIn = null;
        this.accounts.user = null;
        this.accounts.loggedinAddress = null;
        this.accounts.username = null;
        this.accounts.id = null;
        this.accounts.loggedIn = false;
        this.router.navigateByUrl("/shop");
    }

    submit(review: Review) {
        review.date = this.date.getDate() + '/' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear(); 
        review.articleNr = this.product.articleNr;
        review.article = this.product.article;
        review.name = this.getUser().firstname + " " + this.getUser().lastname; 
        review.email = this.getUser().email;
        review.image = this.product.imageUrl;
        this.reviewstack.postReview(review);
        this.Form.resetForm();
    }

    reviewOrder(orderid: number, id: number) {
        this.product = this.getOrders()[orderid].articles[id];
        return this.product;
    }

}