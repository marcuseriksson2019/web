import { Component} from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
    selector: "home",
    templateUrl: "home.html",
    styleUrls: ["home.css"]
})

export class Home {
    private name = environment.appName;

    constructor(private router: Router) {}

    getName() {
        return this.name;
    }
    

}

