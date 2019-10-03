import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { Stock } from "../sources/stock";
import { Product } from "../models/product";
import { Login } from "../administration/login";

@Component({
    templateUrl: "administration.html",
    styleUrls: ["administration.css"]
})

export class Administration {
    editing: boolean = false;
    product: Product = new Product();
    public products: Product[]; 
    editable: boolean= false;

    constructor(private router: Router, private stock: Stock, private login: Login ) {
        this.products = new Array<Product>();
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    getProducts() {
        return this.stock.getProducts();
    }

    update(form: NgForm) {
        this.router.navigateByUrl("/admin/products");
    }

    deleteProduct(id: number) {
        this.getProducts().splice(id, 1);
        this.stock.deleteProduct(id);
    }

    editProduct(id: number) {
        this.product = this.getProducts().find(p => p.id == id + 1);
        return this.product;
    }

    updateProduct(product: Product) {
        this.stock.putProduct(this.product);
    }
 
}