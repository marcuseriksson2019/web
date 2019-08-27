import { Component, Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../models/product";
import { Stock } from "../sources/stock";
import { ProductDetails } from "./productDetails";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "shop",
    templateUrl: "shop.html",
    styleUrls: ["shop.css"]
})

@Injectable()
export class Shop implements OnInit {
    public product: Product;
    public pages = [5, 10, 15, 20];
    public p = 10;
    public numberOfButtons: any;
    public buttons = [1, 2, 3, 4];
    public id1 = 0;
    public id2 = 4;
    public pageNumber = 1;
    private genders: string[];
    public departments: string[];
    private sortModes: string[];
    private subdepartments: string[];
    private pageEnlighted: boolean;
    private selectedgender = null;
    private selecteddept = null;
    private selectedsort = null;
    private noselectiontext: string = "Not specified";
    private squareImages: string[] = ['assets/images/products/suit2.jpg', 'assets/images/products/pants2.jpg', 'assets/images/products/shirt2.jpg'];
    private texts: string[] = ['GO TO SUIT SECTION', 'WOMENS DEPARTMENT', 'SEE THE ENTIRE SORTIMENT'];
    private complete: Product[];
    public height: string = "740px";
    id: string;
    

    constructor(private router: Router, private productDetails: ProductDetails, private stock: Stock, private activeroute: ActivatedRoute) {
        activeroute.params.subscribe(params => { this.id = params['id']; });
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    ngOnInit() {
        this.getProducts(this.selectedgender, this.selecteddept, this.selectedsort);
        this.adjustHeight();
    }

    allDepartments() {
        this.pageNumber = 1;
        this.selectedgender = null;
        this.selecteddept = null;
        this.selectedsort = null;
        this.height = "740px";
    }

    getGender(): string[] {
        this.genders = this.stock.getProducts().map(p => p.gender).filter((gndr, i, a) => a.indexOf(gndr) == i).sort();
        this.genders.unshift(this.noselectiontext);
        return this.genders;
    }

    getDepartments(): string[] {
        this.departments = this.stock.getProducts().map(p => p.department).filter((dept, i, a) => a.indexOf(dept) == i).sort();
        this.departments.unshift(this.noselectiontext);
        return this.departments;
    }

    getSortModes(): string[] {
        this.sortModes = ["Price - ascending", "Price - descending"];
        this.sortModes.sort().unshift(this.noselectiontext);
        return this.sortModes;
    }

    getLength() {
        return this.complete.length;
    }

    getProducts(selectedgender: string = null, selecteddept: string = null, selectedsort: string = null): Product[] {
        this.id1 = (this.pageNumber - 1) * this.p;
        this.id2 = this.id1 + this.p;
        this.calcPages();
        let productPart = this.stock.getProducts().filter(p => { return p.gender == selectedgender || selectedgender == null } ).filter(p => { return p.department == selecteddept || selecteddept == null } );
        if (selectedsort == "Price - descending") {
            this.complete = productPart.sort((a, b) => {return b.price - a.price}).slice(this.id1, this.id2);
        }
        if (selectedsort == "Price - ascending") {
            this.complete = productPart.sort((a, b) => {return a.price - b.price}).slice(this.id1, this.id2);
        }
        if (selectedsort == null) {
            this.complete = productPart.sort((a, b) => {return a.id - b.id}).slice(this.id1, this.id2);
        }
        return this.complete;
    }
    
    getProduct(id: number) : Product {
        return this.stock.getProducts().find(p => p.id == id);
    }

    getSquares() {
        return this.squareImages;
    }

    getFullSortiment() {
        return this.stock.getProducts();
    }

    adjustHeight() {
        if (this.p == 5) {
            this.height = "380px";
        }
        if (this.p == 10) {
            this.height = "740px";
        }
        if (this.p == 15) {
            this.height = "1100px";
        }
        if (this.p == 20) {
            this.height = "1460px";
        }
    }

    onSelect (new_p : number) {
        this.pageNumber = 1;
        this.p = Number(new_p);
        this.adjustHeight();
        this.calcPages();
    }

    selectedGender (new_g : string) {
        if (new_g != this.noselectiontext) {
            this.selectedgender = new_g;
            this.getProducts(this.selectedgender, this.selecteddept, null);
            if (this.complete.length <= 5) {
                this.height = "380px";
            }
            if (this.complete.length > 5) {
                this.height = "740px";
            }
        }
        if (new_g == this.noselectiontext && this.selecteddept != this.noselectiontext) {
            this.selectedgender = null;
            this.getProducts(this.selectedgender, this.selecteddept, null);
            this.height = "740px";
            if (this.complete.length <= 5) {
                this.height = "380px";
            }
            if (this.complete.length > 5) {
                this.height = "740px";
            }
        }
        if (new_g == this.noselectiontext && this.selecteddept == this.noselectiontext) {
            this.selectedgender = null;
            this.getProducts(this.selectedgender, this.selecteddept, null);
            this.height = "740px";
        }
    }

    selectedDepartment (new_d : string) {
        if (new_d != this.noselectiontext) {
            this.selecteddept = new_d;
            this.getProducts(this.selectedgender, this.selecteddept, null);
            if (this.complete.length <= 5) {
                this.height = "380px";
            }
            if (this.complete.length > 5) {
                this.height = "740px";
            }
        }
        if (new_d == this.noselectiontext && this.selectedgender != this.noselectiontext) {
            this.selecteddept = null;
            this.getProducts(this.selectedgender, this.selecteddept, null);
            this.height = "740px";
            if (this.complete.length <= 5) {
                this.height = "380px";
            }
            if (this.complete.length > 5) {
                this.height = "740px";
            }
        }
        if (new_d == this.noselectiontext && this.selectedgender == this.noselectiontext) {
            this.selectedgender = null;
            this.getProducts(this.selectedgender, this.selecteddept, null);
            this.height = "740px";
        }     
    }

    selectedSortMode (new_s : string) {
        if (new_s != this.noselectiontext) {
            this.selectedsort = new_s;
        }
        else
            this.selectedsort = null;
    }

    getPages() {
        this.numberOfButtons =  Math.ceil(this.stock.getProducts().filter(p => { return p.gender == this.selectedgender || this.selectedgender == null } ).filter(p => { return p.department == this.selecteddept || this.selecteddept == null } ).length / this.p);
    }

    showPage(buttonid: number) {
        this.pageNumber = Number(buttonid);
        if (this.pageNumber == this.numberOfButtons) {
            this.getProducts(this.selectedgender, this.selecteddept, null);
            if (this.complete.length <= 5) {
                this.height = "380px";
            }
            if (this.complete.length >= 6 && this.complete.length <= 10) {
                this.height = "740px";
            }
            if (this.complete.length >= 11 && this.complete.length <= 15) {
                this.height = "1100px";
            }
            if (this.complete.length >= 16 && this.complete.length <= 20) {
                this.height = "1460px";
            }
        }
        else {
            this.adjustHeight();
        }
        this.pageEnlighted = true;
    }

    calcPages() {
        this.getPages();
        this.buttons.splice(0, this.buttons.length);
        for (let i = 0; i < this.numberOfButtons; i++) {
			this.buttons.push(i+1);
        }
        return this.buttons;
    }

}

