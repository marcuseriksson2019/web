import { Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "home.html",
    styleUrls: ["home.css"]
})

export class Home {
    private name= 'Web';

    constructor(private router: Router) {}

    getName() {
        return this.name;
    }
    

}

