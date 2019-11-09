import { Component, OnInit, ApplicationModule } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { Product } from "../models/product"
import { Stock } from "../sources/stock";
import { environment } from "../../environments/environment";

@Component({
    templateUrl: "new.html",
    styleUrls: ["new.css"],
    selector: 'new'
})

export class New {
    public product: Product;
    public products: Product[]; 
    private name = environment.appName;

    constructor(private router: Router, activeRoute: ActivatedRoute, private stock: Stock) {
        this.product = new Product;
        this.products = new Array<Product>();
    }

    getName() {
        return this.name;
    }

    getProducts() {
        return this.stock.getProducts();
    }

    submit(value: Product) {
        this.product = value
        if (this.product.articleNr != null && this.product.article != null && this.product.brand != null  && this.product.size != null && this.product.color != null && this.product.descr != null && this.product.gender != null && this.product.department != null && this.product.subdepartment != null && this.product.price != null && this.product.imageUrl != null && this.product.imageUrl2 != null) {
            this.product.quantity = 0;
            this.product.id = this.stock.getProducts().length + 1;
            this.stock.postProduct(this.product);
            this.router.navigateByUrl("/admin/products");
        }
    }


  



    
}