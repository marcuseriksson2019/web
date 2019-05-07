import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { Stock } from "./stock";
import { Product } from "./product.model";
import { HttpRequests } from "./http.requests";
import { Login } from "./login";

@Component({
    templateUrl: "administration.html",
    styleUrls: ["administration.css"]
})

export class Administration {
    editing: boolean = false;
    product: Product = new Product();
    public products: Product[]; 
    editable: boolean= false;

    constructor(private router: Router, private httpReq: HttpRequests, private stock: Stock, private login: Login ) {
        this.products = new Array<Product>();
    }

    getProducts() {
        return this.stock.getProducts();
    }

    update(form: NgForm) {
        this.router.navigateByUrl("/admin/products");
    }

    deleteProduct(id: number) {
        this.getProducts().splice(id + 1, 1);
        this.httpReq.deleteProduct(id + 1).subscribe(data => {
            this.product = data;
        });
    }

    editProduct(id: number) {
        this.product = this.getProducts().find(p => p.id == id + 1);
        return this.product;
    }

    updateProduct(product: Product) {
        this.httpReq.putProduct(this.product).subscribe(p => {
            this.getProducts().splice(this.getProducts().
                findIndex(p => p.id == this.product.id), 1, this.product);
        });
    }
 
}