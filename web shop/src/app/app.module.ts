import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Accounts } from "./sources/accounts";
import { Orderstack } from "./sources/orderstack";
import { Reviewstack } from "./sources/reviewstack";
import { Stock } from "./sources/stock";
import { Cart } from './cart/cart';
import { Shop } from './shop/shop';
import { Home } from './shop/home';
import { Login } from './administration/login';
import { ProductDetails } from './shop/productDetails';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Administration } from './administration/administration';
import { Orders } from './administration/orders';
import { OrderEdit } from './administration/orderEdit';
//import { LoginService } from './administration/loginService';
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
import { Sidebar } from "./user/sidebar";
import { UserRegistration } from "./user/userRegistration";
import { UserLogin } from "./user/userLogin";
import { UserOrders } from "./user/userOrders";
import { UserReviews } from "./user/userReviews";
import { UserAccount } from "./user/userAccount";
import { UserPassword } from "./user/userPassword";
import { UserStatus } from "./user/userStatus";
import { from } from 'rxjs';

@NgModule({
    imports: [FormsModule, CommonModule, ReactiveFormsModule, BrowserModule, HttpClientModule, JsonpModule, HttpModule,
        RouterModule.forRoot([
            {
                path: 'edit/account', component: UserAccount,
                canActivate: [SecureUrl]
            }, 
            {
                path: "edit/password", component: UserPassword,
                canActivate: [SecureUrl]
            },
            {
                path: 'reviews', component: UserReviews,
                canActivate: [SecureUrl]
            }, 
            {
                path: "users/orders", component: UserOrders,
                canActivate: [SecureUrl]
            },
            {
                path: "userAccount", component: UserAccount
            },
            {
                path: "userPassword", component: UserPassword
            },
            {
                path: "userReviews", component: UserReviews
            },
            {
                path: "userLogin", component: UserLogin,
                canActivate: [SecureUrl]
            },
            {
                path: "userRegistration", component: UserRegistration,
                canActivate: [SecureUrl]
            },
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
    declarations: [UserStatus, UserOrders, UserReviews, UserAccount, UserPassword, UserLogin, UserRegistration, Sidebar, Logo, CartPreview, Search, SearchResults, NavigationBar, Home, Shop, ProductDetails, Cart, PlacedOrder, Login, Administration, Orders, OrderEdit, New, AppComponent],
    providers: [UserStatus, UserOrders, UserReviews, UserAccount, UserPassword, UserLogin, UserRegistration, Sidebar, Logo, CartPreview, Search, SearchResults, SearchModel, NavigationBar, Accounts, Stock, Orderstack, Reviewstack, New, JsonpModule, HttpRequests, SecureUrl, HttpModule, Home, Shop, Cart, OrderEdit, ProductDetails/*, LoginService*/, Login, PlacedOrder, CartModel],
    bootstrap: [AppComponent]
})
export class AppModule {}
