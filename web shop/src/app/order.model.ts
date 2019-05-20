import { Injectable } from '@angular/core';
import { Order } from './order';


@Injectable()
export class OrderModel {
    private data: Order[];

    constructor() {
        this.data = new Array<Order>();
    }

    getData(): Order[] {
        return this.data;
    }

    addOrder(order: Order){
        return this.data.push(order);
    }
}

