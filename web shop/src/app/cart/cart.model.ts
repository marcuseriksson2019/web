import { Injectable } from "@angular/core";
import { Product } from "../models/product";


@Injectable()
export class CartModel {
    private data: Product[];
    public amount: number;
    public totalAmount: number;
    public totalSum: number;
    public oneArray: CartRow[];
    
    constructor() {
        this.data = new Array<Product>();
        this.oneArray = new Array<CartRow>();
        this.amount = 0;
        this.totalAmount = 0;
    }
    
    getData(): Product[] {
        return this.data;
    }

    addData(product: Product) {
        return this.data.push(product);
    }

    deleteData(index: number) {
        return this.data.splice(index,1);
    }

    emptyData() {
        return this.data = [];
    }

    getAmount() {
        return this.data.length;
    }

}

export class CartRow {

    constructor(
        public price?: number,
        public quantity?: number) {}

}


