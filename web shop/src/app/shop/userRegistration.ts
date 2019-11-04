import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { Accounts } from "../sources/accounts";
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';


@Component({
    templateUrl: "userRegistration.html",
    styleUrls: ["userRegistration.css"],
    selector: 'userRegistration'
})

export class UserRegistration implements OnInit {
    registerForm: FormGroup;
    formSubmit : boolean = false;
    public user: User;
    public users: User[];
    public errorMessage: string = "Please enter all details";
    public error: boolean = false;

    constructor(private router: Router, private accounts: Accounts, private fb: FormBuilder) {
        this.user = new User;
        this.users = new Array<User>();
    }

    ngOnInit() {
        const firstname = '';
        const lastname = '';
        const street = '';
        const zipcode = '';
        const city = '';
        const country = '';
        const phone = '';
        const email = '';
        const username = '';
        const password = '';

        this.registerForm = this.fb.group(
            {
                firstname: [firstname, Validators.compose([Validators.required])],
                lastname: [lastname, Validators.compose([Validators.required])],
                street: [street, Validators.compose([Validators.required])],
                zipcode: [zipcode, Validators.compose([Validators.required, Validators.minLength(5)])],
                city: [city, Validators.compose([Validators.required])],
                country: [country, Validators.compose([Validators.required])],
                phone: [phone, Validators.compose([Validators.required])],
                email: [email, Validators.compose([Validators.required, Validators.email])],
                username: [username, Validators.compose([Validators.required, Validators.minLength(5)])],
                password: [password, Validators.compose([Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"&@#£$%¤/()]).{6,12}'), Validators.required])] //       ^[[:alpha:]]+$       ^[A-Za-z]+$
            }
        )
    }

    submit() {
        const values = this.registerForm.value;
        const keys = Object.keys(values);
        
        if (this.registerForm.valid) {
            this.formSubmit = true;
            this.accounts.newUser(values);
            this.router.navigateByUrl("/shop");
        }
        else {
            keys.forEach(value => {
                const control = this.registerForm.controls[value];
                if (!control.valid) {
                    this.pushErrorFor(control, "Value is missing");
                    control.markAsTouched();
                }
            });
        }
    }

    pushErrorFor(control: any, msg: string) {
        control.setErrors({ msg: msg });
    }
    
}