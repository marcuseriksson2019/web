import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserLogin } from "./userLogin";
import { Accounts } from "../sources/accounts";

@Component({
    templateUrl: "userStatus.html",
    selector: 'userStatus',
    styleUrls: ["userStatus.css"]
})

@Injectable()
export class UserStatus {

    constructor(private router: Router, private userlogin: UserLogin, private accounts: Accounts) {}

}