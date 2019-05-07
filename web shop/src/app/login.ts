import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
        templateUrl: "login.html",
        selector: 'login',
        styleUrls: ["login.css"]
})

export class Login { 
    public username: string;
    public password: string;
    public loggedIn: boolean;
    public errorMsg: string;

    constructor(private router: Router) { }
    
    login(form: NgForm) {
        if (form.valid) { 
            this.router.navigateByUrl("/admin");
        } else {
                this.errorMsg = "Enter username and password";
        }
    }

    logout() {
        this.router.navigateByUrl("/shop");
    }


}