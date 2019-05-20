import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { Product } from "./product.model"
import { Stock } from "./stock";
import { HttpRequests } from "./http.requests";

@Component({
    templateUrl: "new.html",
    styleUrls: ["new.css"],
    selector: 'new'
})

export class New {
    product: Product = new Product();
    public products: Product[]; 

    constructor(private router: Router, activeRoute: ActivatedRoute, private httpReq: HttpRequests, private stock: Stock) {
        this.products = new Array<Product>();
    }

    getProducts() {
        return this.stock.getProducts();
    }

    update(form: NgForm) {
        this.router.navigateByUrl("/admin/products");
    }

    newProduct(product: Product) {
        if (product.articleNr != null && product.article != null && product.brand != null  && product.size != null && product.color != null && product.descr != null && product.gender != null && product.department != null && product.subdepartment != null && product.price != null && product.imageUrl != null && product.imageUrl2 != null) {
            this.httpReq.postProduct(product)
                .subscribe(p => this.getProducts().push(p));
            this.router.navigateByUrl("/admin");
        }
    }


  



    
}