import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "./product.model";
import { Stock } from "./stock";
import { SearchModel } from "./searchModel";
import { ProductDetails } from "./productDetails";

@Component({
    selector: "searchResults",
    templateUrl: "searchResults.html",
    styleUrls: ["searchResults.css"]
})

export class SearchResults implements OnInit {
    public product: Product;
    public pages = [3, 4, 5, 6, 8, 10, 20];
    public p = 4;
    public numberOfButtons: any;
    public buttons = [1, 2, 3, 4];
    public id1 = 0;
    public id2 = 4;
    public pageNumber = 1;
    public quantity: number;
    private pageEnlighted: boolean;
    public searchResults: Product[];


    constructor(private router: Router, private productDetails: ProductDetails, private stock: Stock, private searchmodel: SearchModel) {
    }

    ngOnInit(): void {
        this.p = 4;
    }

    getResults() {
        this.calcPages();
        this.searchResults = this.stock.getProducts().filter(p => p.article.toLowerCase().includes == this.searchmodel.searchtext.toLowerCase().toLowerCase() || p.descr.toLowerCase().includes(this.searchmodel.searchtext.toLowerCase()) || p.brand.toLowerCase() == this.searchmodel.searchtext.toLowerCase() || p.gender.toLowerCase() == this.searchmodel.searchtext.toLowerCase() || p.articleNr == this.searchmodel.searchtext.trim() || p.subdepartment.toLowerCase() == this.searchmodel.searchtext.toLowerCase() || p.department.toLowerCase() == this.searchmodel.searchtext.toLowerCase() ).slice(this.id1, this.id2);
        return this.searchResults;
    }

    onSelect (new_p : number) {
        this.pageNumber=1;
        this.p = Number(new_p);
        this.id1 = 0;
        this.id2 = this.p;
        this.calcPages();
    }

    getPages() {
        this.numberOfButtons = Math.ceil(this.stock.getProducts().length / this.p);
    }

    showPage(buttonid: number) {
        this.pageNumber = Number(buttonid);
        this.pageEnlighted = true;
        this.id2 = this.pageNumber * this.p;
        this.id1 = this.id2 - this.p;
    }

    calcPages() {
        this.getPages();
        this.buttons.splice(0, this.buttons.length);
        for (let i = 0; i < this.numberOfButtons; i++) {
			this.buttons.push(i+1);
        }
        return this.buttons;
    }

    detailedInfo(product: Product) {
        this.productDetails.supplyInfo(product.id - 1);
        this.router.navigateByUrl("/productDetails");
    }
 
}


