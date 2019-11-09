import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../models/user";
import { HttpRequests } from "../sources/http.requests";
import { Cart } from "../cart/cart";
import { CartModel } from "../cart/cart.model";
import { Accounts } from "../sources/accounts";
import { UserLoginService } from "./userLoginService";


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
    public loggedinUser: String;
    id: number;

    @ViewChild('form') Form;

    constructor(private router: Router, private httpReq: HttpRequests, private cart: Cart, private userLoginService: UserLoginService, private cartSource: CartModel, private accounts: Accounts, private activeroute: ActivatedRoute) {}

    clear() {
        this.loggedIn = false;
        this.accounts.loggedinUser = null;
        this.accounts.loggedIn = null;
        this.accounts.user = null;
        this.accounts.loggedinAddress = null;
        this.accounts.username = null;
        this.accounts.id = null;
    }
    
    login(form: NgForm) {
            if (form.valid) {
                this.userLoginService.authenticate(this.username, this.password).subscribe(response => {
                    if (response) {
                        this.error = false;
                        this.loggedIn = true;
                        this.user = this.httpReq.getCurrentUser();
                        this.user.loggedIn = true;
                        this.accounts.id = this.user.id;
                        this.accounts.loggedinUser = this.user.username;
                        this.accounts.name = this.user.firstname + " " + this.user.lastname;
                        if (this.cartSource.totalSum > 0) {
                            this.cart.placeOrder(this.user);
                            this.router.navigateByUrl("/placedOrder");
                        }
                        else {
                            this.router.navigateByUrl("/user/users/"+ this.user.id).then(_=> this.Form.resetForm());
                        }
                    }
                    this.errorMessage = "Authentication failed";
                })
            } else {
                this.errorMessage = "Form data invalid";
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