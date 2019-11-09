import { Component, ViewChild, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { User } from "../models/user";
import { Accounts } from "../sources/accounts";


@Component({
    templateUrl: "userPassword.html",
    styleUrls: ["userPassword.css"],
    selector: 'userPassword'
})

export class UserPassword implements OnInit {
    passwordForm: FormGroup;
    formSubmit : boolean = false;
    public users: User[];
    user: User;
    public errorMessage: string;
    public error: boolean;
    id: number;
    @ViewChild('form') Form;

    constructor(private router: Router, private accounts: Accounts, private activeroute: ActivatedRoute, private fb: FormBuilder) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
	    this.users = new Array<User>();
        this.user = new User;
        this.error = false;
        this.users = this.accounts.getUsers();  
    }

    ngOnInit() {
        const pswd = '';
        const pswd_confirm = '';
        this.passwordForm = this.fb.group(
            {
                pswd: [pswd, Validators.compose([Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"&@#£$%¤/()]).{6,12}'), Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
                pswd_confirm: [pswd_confirm, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
            }
        )
    }
    
    getUsers(): User[] {
        return this.accounts.getUsers();  
    }

    getUser() : User {
        this.user = this.getUsers()[this.id -2];
        return this.user;
    }

    updatePassword() {  
        const values = this.passwordForm.value;
        const keys = Object.keys(values);
        if (this.passwordForm.valid) {
            this.formSubmit = true;
            if (values.pswd == values.pswd_confirm) {
                this.users = this.accounts.getUsers();  
                this.user = new User;
                this.user = this.users[this.id -1];
                this.user.password = values.pswd;
                this.accounts.putUser(this.user, this.id);
                this.router.navigateByUrl("/user/users/"+ this.id).then(_=> this.reset());
            }
            else {
                this.errorMessage="Passwords do not match";
                this.error = true;
            }
        }
        else {
            keys.forEach(value => {
                if (!this.passwordForm.controls[value].valid) {
                    this.pushErrorFor(value, "Value is missing");
                    this.passwordForm.controls[value].markAsTouched();
                }
            });
        }
    }

    pushErrorFor(value: string, msg: string) {
        this.passwordForm.controls[value].setErrors({ msg: msg });
    }

    reset() {
        this.Form.resetForm();
    }
}