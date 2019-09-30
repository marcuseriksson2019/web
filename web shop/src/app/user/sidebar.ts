import { Component, Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Accounts } from "../sources/accounts";
import { User } from "../models/user";

@Component({
    selector: "sidebar",
    templateUrl: "sidebar.html",
    styleUrls: ["sidebar.css"]
})

@Injectable()
export class Sidebar {
    public boxArray: boolean[];
    public routes: String[];
    public user: User;
    public users: User[];
    id: number;
    public confirmDelete: boolean = false;

    constructor(private router: Router, private accounts: Accounts, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.users = new Array<User>();
        this.users = this.accounts.users;
        this.user = this.users[this.accounts.id];
        this.routes = ["users/orders/", "/reviews/", "/edit/account/", "/edit/password/"];
        this.boxArray = [false, false, false, false];
        this.boxArray.forEach((box, i) => { 
            if (this.router.url == this.routes[i]) {
                this.boxArray[i] = true;
            }
        });
    }

    deleteAccount(id: number) {
        this.accounts.deleteUser(id);
        this.router.navigateByUrl("/shop");
    }

    showPopup() {
        this.confirmDelete = true;
    }

    hidePopup() {
        this.confirmDelete = false;
    }

    getUserID() {
       return this.accounts.id;
    }

}