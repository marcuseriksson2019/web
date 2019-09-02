import { Component, Injectable, ViewChild } from "@angular/core";
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

    @ViewChild('form') Form;

    constructor(private router: Router, private cartSource: CartModel, private cart: Cart) {}

    submit(form: NgForm) { 
            if (form.valid) {
                this.router.navigateByUrl("/placedOrder");
            }
    }

    reset() {
        this.Form.resetForm();
    }

}
