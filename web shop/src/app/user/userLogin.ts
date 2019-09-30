import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../models/user";
import { HttpRequests } from "../sources/http.requests";
import { Cart } from "../cart/cart";
import { CartModel } from "../cart/cart.model";
import { Accounts } from "../sources/accounts";

@Component({
    templateUrl: "userLogin.html",
    selector: 'userLogin',
    styleUrls: ["userLogin.css"]
})

export class UserLogin { 
    public username: string;
    public password: string;
    public loggedIn: boolean = true;
    public error: boolean = false;
    public errorMessage: string = "Wrong username or password";
    public user: User;
    public users: User[];
    public loggedinUser: String;
    id: number;

    @ViewChild('form') Form;

    constructor(private router: Router, private httpReq: HttpRequests, private cart: Cart, private cartSource: CartModel, private accounts: Accounts, private activeroute: ActivatedRoute) { 
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.user = new User;
        this.users = new Array<User>();  
        this.httpReq.getUsers().subscribe(data => this.users = data);
    }

    clear() {
        this.loggedIn = false;
        this.accounts.loggedinUser = null;
        this.accounts.loggedIn = null;
        this.accounts.user = null;
        this.accounts.loggedinAddress = null;
        this.accounts.username = null;
        this.accounts.id = null;
    }

    getUsers() {
        return this.users;
    }
    
    login(value: User) {
        this.user = this.getUsers().find(p => p.username == value.username && p.password == value.password);
            if (this.user.username == value.username && this.user.password == value.password) {
                this.error = false;
                this.loggedIn = true;
                this.user.loggedIn = true;
                this.accounts.id = this.user.id;
                this.accounts.loggedinUser = this.user.username;
                this.accounts.name = this.user.firstname + " " + this.user.lastname;
                if (this.cartSource.totalSum > 0) {
                    this.cart.placeOrder(this.user);
                    this.router.navigateByUrl("/placedOrder");
                }
                else {
                    this.router.navigateByUrl("/users/orders");
                }
            } 
            else {
                this.error = true;
                this.loggedIn = false;
            }
    }

    logout() {
        this.loggedIn = false;
        this.user.loggedIn = false;
    }

    loggedin() {
        return this.user.firstname + " " + this.user.lastname; 
    }

    reset() {
        this.Form.resetForm();
    }


}