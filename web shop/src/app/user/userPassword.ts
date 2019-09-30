import { Component, ViewChild } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { User } from "../models/user";
import { Accounts } from "../sources/accounts";


@Component({
    templateUrl: "userPassword.html",
    styleUrls: ["userPassword.css"],
    selector: 'userPassword'
})

export class UserPassword {
    public users: User[];
    user: User;
    public errorMessage: string;
    public error: boolean;
    public password: FormGroup;

    @ViewChild('form') Form;

    constructor(private router: Router, private accounts: Accounts, private activeroute: ActivatedRoute, private fb: FormBuilder) {
        this.users = new Array<User>();
        this.user = new User;
        this.error = false;
        this.users = this.accounts.users;  

        this.password = new FormGroup({
            pswd: new FormControl(),
            pswd_confirm: new FormControl()
        });
    }
    
    getUsers(): User[] {
        return this.accounts.users;  
    }

    getUser() : User {
        this.user = this.users[this.accounts.id -2];
        return this.user;
    }

    updatePassword(form: any, id: number) {
            if (form.pswd == form.pswd_confirm) {
                this.users = this.accounts.users;  
                this.user = new User;
                this.user = this.users[this.accounts.id -1];
                this.user.password = form.pswd;
                this.accounts.putUser(this.user, this.accounts.id);
                this.router.navigateByUrl("/users/orders");
            }
            else {
                this.errorMessage="Passwords do not match";
                this.error = true;
            }
    }

    reset() {
        this.Form.resetForm();
    }
}