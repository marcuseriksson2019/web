import { Component } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { User } from "../models/user";
import { Accounts } from "../sources/accounts";


@Component({
    templateUrl: "userAccount.html",
    styleUrls: ["userAccount.css"],
    selector: 'userAccount'
})

export class UserAccount {
    public users: User[];
    user: User;

    constructor(private router: Router, private accounts: Accounts, private activeroute: ActivatedRoute) {
        this.users = new Array<User>();
        this.user = new User;
        this.users = this.accounts.users;  
    }

    ngOnInit() {
        this.user = this.users[this.accounts.id -1];
    }
    
    getUsers(): User[] {
        return this.accounts.users;
    }

    getUser() : User {
        this.user = this.getUsers()[this.accounts.id -1];
        return this.user;
    }

    updateUser(user: User, id: number) {
        user.username = this.user.username;
        user.password = this.user.password;
        this.accounts.putUser(this.user, this.accounts.id);
        this.router.navigateByUrl("/users/orders");
    }

}