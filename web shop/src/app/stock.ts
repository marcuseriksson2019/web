import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { HttpRequests } from "./http.requests";


@Injectable()
export class Stock {
    public products: Product[];
    public product: Product;
    public cart: Product[];

    constructor(private httpReq: HttpRequests) {
        this.products = new Array<Product>();
        this.cart = new Array<Product>();
        this.httpReq.getProducts().subscribe(data => {
            this.products = data;
        });
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number) : Product {
        return this.getProducts().find(p => p.id == id);
    }

    deleteProduct(id: number) {
        this.httpReq.deleteProduct(id+1).subscribe(p => {
            this.getProducts().splice(this.getProducts().
                findIndex(p => p.id == id+1), 1);
        });

    }
 

}