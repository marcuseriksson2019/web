import { Component, OnInit, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "./product.model";
import { Stock } from "./stock";
import { ProductDetails } from "./productDetails";

@Component({
    selector: "shop",
    templateUrl: "shop.html",
    styleUrls: ["shop.css"]
})

@Injectable()
export class Shop implements OnInit {
    public product: Product;
    public pages = [3, 4, 5, 6, 8, 10, 20];
    public p = 4;
    public numberOfButtons: any;
    public buttons = [1, 2, 3, 4];
    public id1 = 0;
    public id2 = 4;
    public pageNumber = 1;
    public quantity: number;
    private genders: string[];
    public departments: string[];
    private subdepartments: string[];
    private pageEnlighted: boolean;
    private selectedgender = null;
    private selecteddept = null;
    private noselectiontext: string = "Not specified";

    constructor(private router: Router, private productDetails: ProductDetails, private stock: Stock) {}

    ngOnInit(): void {
        this.p = 4;
    }

    allDepartments() {
        this.id1 = 0;
        this.id2 = this.p;
        this.selectedgender = null;
        this.selecteddept = null;
    }

    getGender(): string[] {
        this.id1 = 0;
        this.id2 = this.p;
        this.genders = this.stock.getProducts().map(p => p.gender)
        .filter((gndr, i, a) => a.indexOf(gndr) == i).sort();
        this.genders.unshift(this.noselectiontext);
        return this.genders;
    }

    getDepartments(): string[] {
        this.id1 = 0;
        this.id2 = this.p;
        this.departments = this.stock.getProducts().map(p => p.department)
        .filter((dept, i, a) => a.indexOf(dept) == i).sort();
        this.departments.unshift(this.noselectiontext);
        return this.departments;
    }

    getProducts(selectedgender: string = null, selecteddept: string = null): Product[] {
        this.calcPages();
        return this.stock.getProducts().filter(p => { return p.gender == selectedgender || selectedgender == null } ).filter(p => { return p.department == selecteddept || selecteddept == null } ).slice(this.id1, this.id2);
    }

    getProduct(id: number) : Product {
        return this.stock.getProducts().find(p => p.id == id);
    }

    onSelect (new_p : number) {
        this.pageNumber=1;
        this.p = Number(new_p);
        this.id1 = 0;
        this.id2 = this.p;
        this.calcPages();
    }

    selectedGender (new_d : string) {
        if (new_d != this.noselectiontext) {
            this.selectedgender = new_d;
        }
        else
            this.selectedgender = null;
    }

    selectedDepartment (new_d : string) {
        if (new_d != this.noselectiontext) {
            this.selecteddept = new_d;
        }
        else
            this.selecteddept = null;
    }

    getPages() {
        this.numberOfButtons = Math.ceil(this.stock.getProducts().filter(p => { return p.gender == this.selectedgender || this.selectedgender == null } ).filter(p => { return p.department == this.selecteddept || this.selecteddept == null } ).length / this.p);
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

