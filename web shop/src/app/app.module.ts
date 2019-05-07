import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Stock } from "./stock";
import { Cart } from './cart';
import { Shop } from './shop';
import { Home } from './home';
import { ID } from './id.model';
import { OrderModel } from './order.model';
import { Checkout } from './checkout';
import { Login } from './login';
import { ProductDetails } from './productDetails';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Administration } from './administration';
import { Orders } from './orders';
import { New } from './new';
import { RouterModule } from "@angular/router";
import { CartModel } from './cart.model';
import { PlacedOrder } from './placedOrder';
import { CommonModule } from '@angular/common';
import { SecureUrl } from "./secureUrl";
import { HttpRequests } from './http.requests';
import { NavigationBar } from "./navigationBar";
import { Search } from "./search";
import { SearchResults } from "./searchResults";
import { SearchModel } from "./searchModel";
import { CartPreview } from "./cartPreview";
import { Logo } from "./logo";

let routing = RouterModule.forChild([
    { path: "cart", component: Cart },
    {
    path: "products", component: Cart,
    children: [
    { path: "products/:mode/:id", component: Cart },
    { path: "products/:mode", component: Cart },
    { path: "products", component: Cart },
    { path: "**", redirectTo: "products" }
    ]
    },
    { path: "**", redirectTo: "cart" }
    ]);

@NgModule({
    imports: [FormsModule, CommonModule, ReactiveFormsModule, BrowserModule, HttpClientModule, JsonpModule, HttpModule,
        RouterModule.forRoot([
            {
                path: "placedOrder", component: PlacedOrder,
                canActivate: [SecureUrl]
            },
            {
                path: "checkout", component: Checkout,
                canActivate: [SecureUrl]
            },
            {
                path: "home", component: Home,
                canActivate: [SecureUrl]
            },
            {
                path: "shop", component: Shop,
                canActivate: [SecureUrl]
            },
            {
                path: "productDetails", component: ProductDetails,
                canActivate: [SecureUrl]
            },
            {
                path: "cart", component: Cart,
                canActivate: [SecureUrl]
            },
            {
                path: "searchResults", component: SearchResults,
                canActivate: [SecureUrl]
            },
            {
                path: "login", component: Login,
                canActivate: [SecureUrl]
            },
            {
                path: "admin", component: Administration
            },
            {
                path: "orders", component: Orders
            },
            {
                path: "new", component: New
            },
            { path: "**", redirectTo: "/home" }
        ])],
    declarations: [Logo, CartPreview, Search, SearchResults, NavigationBar, Home, Shop, ProductDetails, Cart, Checkout, Login, PlacedOrder, Administration, Orders, New, AppComponent],
    providers: [Logo, CartPreview, Search, SearchResults, SearchModel, NavigationBar, Stock, New, JsonpModule, HttpRequests, SecureUrl, Login, HttpModule, Home, Shop, Cart, ID, OrderModel, ProductDetails, Checkout, PlacedOrder, CartModel],
    bootstrap: [AppComponent]
})
export class AppModule { }
