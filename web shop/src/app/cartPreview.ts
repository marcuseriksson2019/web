import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CartModel } from "./cart.model";
import { Cart } from "./cart";

@Component({
    selector: "cartPreview",
    templateUrl: "cartPreview.html",
    styleUrls: ["cartPreview.css"]
})

@Injectable()
export class CartPreview {
    
    constructor(private router: Router, private cartSource: CartModel, private cart: Cart) {}

}