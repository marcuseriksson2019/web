import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpRequests } from "./http.requests";
import { Router } from "@angular/router";


@Injectable()
export class Accounts {
    public users: User[];
    public user: User;
    public username: string;
    public password: string;
    public loggedinUser: String;
    public loggedinAddress: String | Number;
    public loggedIn: boolean;
    public name: String;
    public id: number;

    constructor(private httpReq: HttpRequests, private router: Router) {
        this.users = new Array<User>();
        this.httpReq.getUsers().subscribe(data => {
            this.users = data;
        });
        this.loggedinUser = new String(); 
        this.loggedinAddress = new String();
        this.name = new String();
        this.user = new User;
        this.id = null;
    }

    logout() {
        this.loggedIn = false;
        this.user.loggedIn = false;
        this.router.navigateByUrl("/shop");
    }

    clear() {
        this.loggedIn = false;
        this.user.loggedIn = true;
        this.loggedinUser = null;
        this.loggedIn = null;
        this.user = null;
        this.loggedinAddress = null;
        this.username = null;
        this.id = null;
        this.name = null;
        this.router.navigateByUrl("/shop");
    }

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: number) : User {
        this.user = this.getUsers().find(p => p.id == id);
        return this.user;
    }

    newUser(user: User) {
        this.httpReq.newUser(user).subscribe();
        this.users.push(user);
    }

    deleteUser(id: number) {
        this.httpReq.deleteUser(id).subscribe(p => {
            this.getUsers().splice(this.getUsers().
                findIndex(p => p.id == id), 1);
        });

    }

    putUser(user: User, id: number) {
         this.httpReq.putUser(user, id).subscribe();
    }


 

}