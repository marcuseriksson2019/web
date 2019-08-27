import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Stock } from "./sources/stock";
import { Cart } from './cart/cart';
import { Shop } from './shop/shop';
import { Home } from './shop/home';
import { OrderModel } from './administration/order.model';
import { Checkout } from './cart/checkout';
import { Login } from './administration/login';
import { ProductDetails } from './shop/productDetails';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Administration } from './administration/administration';
import { Orders } from './administration/orders';
import { OrderEdit } from './administration/orderEdit';
import { New } from './administration/new';
import { RouterModule } from "@angular/router";
import { CartModel } from './cart/cart.model';
import { PlacedOrder } from './shop/placedOrder';
import { CommonModule } from '@angular/common';
import { SecureUrl } from "./shop/secureUrl";
import { HttpRequests } from './sources/http.requests';
import { NavigationBar } from "./header/navigationBar";
import { Search } from "./header/search";
import { SearchResults } from "./header/searchResults";
import { SearchModel } from "./header/searchModel";
import { CartPreview } from "./cart/cartPreview";
import { Logo } from "./header/logo";


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
                path: 'shop/products/:id', component: ProductDetails,
                canActivate: [SecureUrl]
            }, 
            {
                path: "shop", component: Shop,
                canActivate: [SecureUrl]
            },
            {
                path: "products", component: ProductDetails,
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
                path: 'orders/:id', component: OrderEdit,
                canActivate: [SecureUrl]
            }, 
            {
                path: "orders", component: Orders
            },
            {
                path: "new", component: New
            },
            { path: "**", redirectTo: "/home" }
        ])],
    declarations: [Logo, CartPreview, Search, SearchResults, NavigationBar, Home, Shop, ProductDetails, Cart, Checkout, Login, PlacedOrder, Administration, Orders, OrderEdit, New, AppComponent],
    providers: [Logo, CartPreview, Search, SearchResults, SearchModel, NavigationBar, Stock, New, JsonpModule, HttpRequests, SecureUrl, Login, HttpModule, Home, Shop, Cart, OrderEdit, OrderModel, ProductDetails, Checkout, PlacedOrder, CartModel],
    bootstrap: [AppComponent]
})
export class AppModule { }
