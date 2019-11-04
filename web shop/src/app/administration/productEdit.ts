import { Component } from "@angular/core";
import { Router, ActivatedRoute  } from "@angular/router";
import { Product } from "../models/product";
import { Stock } from "../sources/stock";
import { environment } from "../../environments/environment";


@Component({
    templateUrl: "productEdit.html",
    styleUrls: ["productEdit.css"],
    selector: 'productEdit'
})

export class ProductEdit {
    public products: Product[];
    product: Product;
    id: number;
    private name = environment.appName; 

    constructor(private router: Router, private stock: Stock, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.products = new Array<Product>();
        this.products = this.stock.getProducts();
    }

    getName() {
        return this.name;
    }
    
    getProducts(): Product[] {
        return this.stock.getProducts();
    }

    getProduct(id: number) : Product {
        this.product = this.getProducts().find(p => p.id == id);
        return this.product;
    }

    updateProduct(product: Product, id: number) {
        this.stock.putProduct(product, id);
        this.router.navigateByUrl("/admin/products");
    }


}
  
