import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "./product.model";
import { Stock } from "./stock";
import { Cart } from "./cart";
import { HttpRequests } from "./http.requests";
import { ID } from "./id.model";


@Component({
    templateUrl: "productDetails.html",
    styleUrls: ["productDetails.css"],
    selector: 'productDetails'
})

@Injectable()
export class ProductDetails {

    public product: Product;
    private products: Product[];
    private divId: number;
    public size: string;
    public color: string;
    public sizes = ["XS", "S", "M", "L", "XL"];
    public colors = ["black","blue", "gray", "white"];
    private enlarge: boolean;
    public cart: Product[];

    constructor(private router: Router, private idRef: ID, private cartRef: Cart, private httpReq: HttpRequests, private stock: Stock) {
        this.products = new Array<Product>();
        this.enlarge = false;
        this.divId = this.idRef.id;
        this.cart = new Array<Product>();
    }

    returnToShop() {
        this.router.navigateByUrl("/shop");
    }

    supplyInfo(id: number) {
        this.divId = id;
        this.idRef.addId(id);
        return this.stock.getProducts();
    }

    getId(){
        return this.divId;
    }

    getProd() {
        return this.stock.getProducts();
    }

    onSelect (new_s : String) {
        this.size = String(new_s);
    }

    onSelect2 (new_c : String) {
        this.color = String(new_c);
    }

    magnify() {
        this.enlarge = true;
    }

    return() {
        this.enlarge = false;
    }

    addToCart(): void {
        if (this.size && this.color != null) {
            this.product = this.getProd()[this.divId];
            this.product.size = this.size;
            this.product.color = this.color;
            this.cartRef.addInCart(this.product);
            this.router.navigateByUrl("/cart");
        }
    }


}

