import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpRequests } from './sources/http.requests';
import { Accounts } from "./sources/accounts";
import { Orderstack } from "./sources/orderstack";
import { Reviewstack } from "./sources/reviewstack";
import { Stock } from "./sources/stock";
import { Cart } from './cart/cart';
import { Shop } from './shop/shop';
import { Home } from './shop/home';
import { ProductDetails } from './shop/productDetails';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CartModel } from './cart/cart.model';
import { PlacedOrder } from './shop/placedOrder';
import { CommonModule } from '@angular/common';
import { UserRegistration } from "./shop/userRegistration";
import { UserLoginService } from "./user/userLoginService";
import { SecureUrl } from "./shop/secureUrl";
import { NavigationBar } from "./header/navigationBar";
import { Search } from "./header/search";
import { SearchResults } from "./header/searchResults";
import { SearchModel } from "./header/searchModel";
import { CartPreview } from "./cart/cartPreview";
import { Logo } from "./header/logo";
import { from } from 'rxjs';

@NgModule({
    imports: [FormsModule, CommonModule, ReactiveFormsModule, BrowserModule, HttpClientModule, JsonpModule, HttpModule,
        RouterModule.forRoot([
            {
                path: "placedOrder", component: PlacedOrder,
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
                path: "shop/userRegistration", component: UserRegistration,
                canActivate: [SecureUrl]
            },
            {
                path: "shop/placedOrder", component: PlacedOrder,
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
                path: "user", 
                loadChildren:"./user/user.module#UserModule",
                canActivate: [SecureUrl]
            },
            {
                path: "admin", 
                loadChildren:"./administration/admin.module#AdminModule",
                canActivate: [SecureUrl]
            },
            { path: "**", redirectTo: "/home" }
        ])],
    declarations: [Logo, CartPreview, Search, SearchResults, NavigationBar, Home, Shop, ProductDetails, Cart, PlacedOrder, UserRegistration, AppComponent],
    providers: [UserRegistration, UserLoginService, Logo, CartPreview, Search, SearchResults, SearchModel, NavigationBar, JsonpModule, SecureUrl, HttpModule, Home, Shop, Cart, ProductDetails, PlacedOrder, CartModel, HttpRequests, Accounts, Orderstack, Reviewstack, Stock],
    bootstrap: [AppComponent]
})
export class AppModule {}
