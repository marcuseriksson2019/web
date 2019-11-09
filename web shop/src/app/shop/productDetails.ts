import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/product";
import { Review } from "../models/review";
import { Stock } from "../sources/stock";
import { Cart } from "../cart/cart";
import { ActivatedRoute } from '@angular/router';
import { Reviewstack } from "../sources/reviewstack";


@Component({
    templateUrl: "productDetails.html",
    styleUrls: ["productDetails.css"],
    selector: 'productDetails'
})

@Injectable()
export class ProductDetails {

    public product: Product;
    private products: Product[];
    private reviews: Review[];
    public size: string;
    public color: string;
    public sizes = ["XS", "S", "M", "L", "XL"];
    public colors = ["black","blue", "gray", "white"];
    private enlarge: boolean;
    public cart: Product[];
    id: number;

    constructor(private router: Router, private cartRef: Cart, private stock: Stock, private reviewstack: Reviewstack, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
        this.products = new Array<Product>();
        this.enlarge = false;
        this.cart = new Array<Product>();
        this.reviews = new Array<Review>();
        this.reviews = this.reviewstack.getReviews();
    }

    getReviews(articleNr: number) : Review[] {
        return this.reviewstack.getReviews().filter(r => r.articleNr == articleNr);
    }

    returnToShop() {
        this.router.navigateByUrl("/shop");
    }

    getProduct(id: number) : Product {
        return this.stock.getProducts().find(p => p.id == id);
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
            this.product = this.getProduct(this.id);
            this.product.size = this.size;
            this.product.color = this.color;
            this.cartRef.addInCart(this.product);
            this.router.navigateByUrl("/cart");
        }
    }


}

