import { Injectable, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/product";

@Injectable()
export class SearchModel {
    public product: Product;
    public searchtext: any;
    private stringArray: string[];

    @Input() searchword: String;

    constructor(private router: Router) {
        this.searchtext = new String();
    }

    retrieveValue(value: String): void {
        this.router.navigateByUrl("/searchResults");
        this.stringArray=(Object.values(value));
        this.searchtext = this.stringArray[0];
    }

}


