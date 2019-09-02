import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "logo",
    templateUrl: "logo.html",
    styleUrls: ["logo.css"]
})

@Injectable()
export class Logo {
    private name = 'Web';

    constructor(private router: Router) {
    }

    getName() {
        return this.name;
    }

}