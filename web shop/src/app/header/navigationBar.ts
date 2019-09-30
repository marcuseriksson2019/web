import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../cart/cart";

@Component({
    selector: "navigationBar",
    //moduleId: module.id,
    templateUrl: "navigationBar.html",
    styleUrls: ["navigationBar.css"]
})

@Injectable()
export class NavigationBar {
    public boxArray: boolean[];
    public routes: String[];

    constructor(private router: Router, private cart: Cart) {
        this.routes = ["/home", "/shop", "/cart", "/checkout", "/placedOrder"];
        this.boxArray = [false, false, false, false, false];
        this.boxArray.forEach((b, index) => { 
            if (this.router.url == this.routes[index]) {
                this.boxArray[index] = true;
            }
            if (this.router.url == "/productDetails") {
                this.boxArray[1] = true;
            }
        });
 
    }

}