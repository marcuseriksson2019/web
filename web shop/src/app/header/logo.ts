import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
    selector: "logo",
    templateUrl: "logo.html",
    styleUrls: ["logo.css"]
})

@Injectable()
export class Logo {
    private name = environment.appName;

    constructor(private router: Router) {
    }

    getName() {
        return this.name;
    }

}