import { Component } from "@angular/core";
import { Shop } from "../shop/shop";
import { Stock } from "../sources/stock";
import { Product } from "../models/product";
import { Router } from "@angular/router";
import { transition } from "@angular/animations";


@Component({
    selector: "slideshow",
    templateUrl: "slideshow.html",
    styleUrls: ["slideshow.css"]
})

export class Slideshow {
    private selectedgender = null;
    private selecteddept = null;

    constructor(private shop: Shop, private stock: Stock, private router: Router) {}

    getProducts(): Product[] {
        return this.stock.getProducts();
    }

}