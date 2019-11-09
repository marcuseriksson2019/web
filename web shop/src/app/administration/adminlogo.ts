import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
    selector: "adminlogo",
    templateUrl: "adminlogo.html",
    styleUrls: ["adminlogo.css"]
})

@Injectable()
export class AdminLogo {
    private name = environment.appName;

    constructor(private router: Router) {
    }

    getName() {
        return this.name;
    }

}