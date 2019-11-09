import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Stock } from "../sources/stock";
import { Product } from "../models/product";
import { SearchModel } from "./searchModel";

@Component({
    selector: "search",
    templateUrl: "search.html",
    styleUrls: ["search.css"]
})

export class Search {
    product: Product = new Product();
    public products: Product[]; 
    public searchResults: Product[]; 
    public searchResults2: string[];

    constructor(private router: Router, private stock: Stock, private searchmodel: SearchModel ) {}

    submit(form: String) {
        if (form !="" || form != null) {
            this.router.navigateByUrl("/searchResults");
            this.searchmodel.searchtext = form;
        }
        else {
            this.router.navigateByUrl("/home");
        }
    }

}