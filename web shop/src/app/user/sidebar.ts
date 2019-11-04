import { Component, Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Accounts } from "../sources/accounts";
import { User } from "../models/user";
import { UserLoginService } from "./userLoginService";

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

    constructor(private router: Router, private accounts: Accounts, private userLoginService: UserLoginService, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.users = new Array<User>();
        this.users = this.accounts.users;
        this.user = this.users[this.id];
        this.routes = ["/user/orders/user/:id", "/user/reviews/user/:id", "/user/edit/account/user/:id", "/user/edit/password/user/:id"];
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
       return this.id;
    }

    logout() {
        this.userLoginService.clear();
        this.router.navigateByUrl("/shop");
    }

}