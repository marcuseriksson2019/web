import { Component, Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../models/product";
import { Review } from "../models/review";
import { Stock } from "../sources/stock";
import { User } from "../models/user";
import { Accounts } from "../sources/accounts";
import { Reviewstack } from "../sources/reviewstack";


@Component({
    templateUrl: "userReviews.html",
    styleUrls: ["userReviews.css"],
    selector: 'userReviews'
})

@Injectable()
export class UserReviews {

    public product: Product;
    private products: Product[];
    private reviews: Review[];
    public users: User[];
    user: User;

    constructor(private router: Router, private accounts: Accounts, private reviewstack: Reviewstack, private stock: Stock, private activeroute: ActivatedRoute) {
        this.products = new Array<Product>();
        this.reviews = new Array<Review>();
        this.reviews = this.reviewstack.getReviews();
        this.users = new Array<User>();
        this.user = new User;
        this.users = this.accounts.users;  
    }

    ngOnInit() {}
    
    getUser() : User {
        this.user = this.users[this.accounts.id -1];
        return this.user;
    }

    getReviews() : Review[] {
        return this.reviewstack.getReviews().filter(r => r.email == this.getUser().email);
    }

}