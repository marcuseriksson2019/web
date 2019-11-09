import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { Stock } from "../sources/stock";
import { Product } from "../models/product";
import { Login } from "../administration/login";
import { environment } from "../../environments/environment";
import { CoreEnvironment } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Component({
    templateUrl: "administration.html",
    styleUrls: ["administration.css"]
})

export class Administration {
    public product: Product;
    public products: Product[];
    private name = environment.appName;

    constructor(private router: Router, private stock: Stock, private login: Login, private activeroute: ActivatedRoute) {
        this.products = new Array<Product>();
        this.products = this.stock.getProducts();
    }

    getName() {
        return this.name;
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    ngOnInit() {
        return this.stock.getProducts();
    }

    getProducts() {
        return this.stock.getProducts();
    }

    deleteProduct(id: number) {
        this.stock.getProducts().splice(id-1, 1);
        this.stock.deleteProduct(id-1);
    }

 
}