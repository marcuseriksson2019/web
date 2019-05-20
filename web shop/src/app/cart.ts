import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "./product.model";
import { CartModel, CartRow } from "./cart.model";
import { Order } from "./order";
import { OrderModel } from "./order.model";
import { HttpRequests } from "./http.requests";

@Component({
    templateUrl: "cart.html",
    styleUrls: ["cart.css"],
    selector: 'cart'
})

@Injectable()
export class Cart {
    public articles: Product[];
    public product: Product;
    public VAT: number;
    public amount: number;
    public quantity: number;
    private stringArray: string[];
    private orders: Order[];
    public order: Order;
    private date: any;
    private index: number;
    private cartrow: CartRow;

    constructor(private router: Router, private cartSource: CartModel, private orderModel: OrderModel, private httpReq: HttpRequests) { 
        this.cartSource.totalSum = 0;
        this.VAT = 0;
        this.index = 0;
        this.quantity = 1;
        this.order = new Order;
        this.cartrow = new CartRow;
        this.date = new Date();
        this.orders = new Array<Order>();
        this.order.articles = new Array<Product>();
        this.order.ordernumber = 0;
        this.cartSource.getData().forEach(p => { this.order.articles.push(p); p.quantity = this.quantity; this.cartSource.totalSum += p.price * this.quantity; this.VAT = Math.ceil(this.cartSource.totalSum * 0.3); this.cartSource.amount++;});
        this.cartSource.totalSum = Math.ceil(this.cartSource.totalSum);
        this.VAT = Math.ceil(this.VAT);
        this.orderModel.getData().forEach(p => this.orders.push(p) );
    }
  
    addInCart(product: Product) {
        this.cartSource.amount = this.quantity;
        this.cartSource.totalAmount++;
        this.cartrow = new CartRow(product.price, 1);
        this.cartSource.oneArray.push(this.cartrow);
        this.cartSource.totalSum =  Math.ceil(product.price);
        this.VAT = Math.ceil(this.cartSource.totalSum * 0.3);
        this.cartSource.totalSum = Math.ceil(this.cartSource.totalSum);
        this.cartSource.addData(product);
    }

    getCart() {
        return this.order.articles;
    } 

    emptyCart() {
        this.cartSource.emptyData();
        this.cartSource.amount = 0;
        this.cartSource.totalAmount = 0;
        this.cartSource.totalSum = 0;
        this.cartSource.oneArray = [];
        return this.order.articles;
    }

    onSelect (array: Product[], product: Product, q: number) {
        this.cartSource.amount = Number(q);
        this.cartSource.totalSum = product.price * this.cartSource.amount;
        this.index = array.indexOf(product);
        this.cartSource.oneArray[this.index].quantity = Number(q);
        let am = 0, sum = 0;
        this.cartSource.oneArray.forEach(e => { am += e.quantity; sum+= e.price * e.quantity });
        this.cartSource.totalAmount = am;
        this.cartSource.totalSum = Math.ceil(sum);
        product.quantity = Number(q);
    }

    checkout() {
        if (this.cartSource.totalSum != 0 && this.cartSource.amount != 0) {
            this.router.navigateByUrl("/checkout");
        }
    }

    placeOrder(value: Order) {
        if (this.order.firstname && this.order.lastname && this.order.street && this.order.city && this.order.zipcode && this.order.country && this.order.phone) {
            this.order.articles = new Array<Product>();
            this.order.ordernumber++;
            this.order.date = this.date.getDate() + '/' + (this.date.getMonth() + 1) + '-' + this.date.getFullYear();
            this.cartSource.totalSum = 0;
            this.VAT = 0;
            this.cartSource.getData().forEach((p, i) => { this.order.articles.push(p); p.quantity = this.cartSource.oneArray[i].quantity;  this.cartSource.totalSum +=  Math.ceil(p.price*p.quantity); this.VAT = Math.ceil(this.cartSource.totalSum*0.3); this.cartSource.amount++; });
            this.order.total = this.cartSource.totalSum;
            this.order.VAT = this.VAT;
            this.order.shipped = false;
            this.orders.push(this.order);
            this.orderModel.addOrder(this.order);
            this.httpReq.postOrder(this.order).subscribe();
            this.router.navigateByUrl("/placedOrder");
        }
    }

}


