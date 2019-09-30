import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { Accounts } from "../sources/accounts";

@Component({
    templateUrl: "userRegistration.html",
    styleUrls: ["userRegistration.css"],
    selector: 'userRegistration'
})

export class UserRegistration {
    public user: User;
    public users: User[];
    public errorMessage: string = "Please enter all details";
    public error: boolean = false;

    constructor(private router: Router, private accounts: Accounts) {
        this.user = new User;
        this.users = new Array<User>();
    }

    submit(value: User) {
        this.user = value;
        if (this.user.firstname != null && this.user.lastname != null && this.user.street != null &&  this.user.zipcode != null &&  this.user.city != null &&  this.user.country != null && this.user.phone != null && this.user.email != null && this.user.username != null && this.user.password != null) {
            this.error = false;
            //this.user.orders = [];
            this.accounts.newUser(this.user);
            this.router.navigateByUrl("/shop");
        }
        else {
            this.error = true;
        }
    }


}