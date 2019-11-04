import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./loginService";

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

    constructor(private router: Router, private loginService: LoginService) { }
    
    login(form: NgForm) {
        if (form.valid) { 
         this.loginService.authenticate(this.username, this.password).subscribe(response => {
                if (response) {
                    this.router.navigateByUrl("/admin/products");
                }
            this.errorMsg = "Authentication Failed";
            })
        } else {
                this.errorMsg = "Enter username and password";
        }
    }

    logout() {
        this.router.navigateByUrl("/shop");
        this.loginService.clear();
    }


}