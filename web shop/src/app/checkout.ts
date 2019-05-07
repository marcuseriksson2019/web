import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CartModel } from "./cart.model";
import { Cart } from "./cart";
import { NgForm } from "@angular/forms";


@Component({
    templateUrl: "checkout.html",
    styleUrls: ["checkout.css"],
    selector: 'checkout'
})

@Injectable()
export class Checkout {

    constructor(private router: Router, private cartSource: CartModel, private cart: Cart) {}

    submit(form: NgForm) { 
            if (form.valid) {
                this.router.navigateByUrl("/placedOrder");
            }
    }

}
