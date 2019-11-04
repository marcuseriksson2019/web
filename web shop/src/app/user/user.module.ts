import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Accounts } from "../sources/accounts";
import { Orderstack } from "../sources/orderstack";
import { Reviewstack } from "../sources/reviewstack";
import { Sidebar } from "./sidebar";
import { UserLogin } from "./userLogin";
import { UserLoginService } from "./userLoginService";
import { UserLoginGuard } from './user.login.guard';
import { UserOrders } from "./userOrders";
import { UserReviews } from "./userReviews";
import { UserAccount } from "./userAccount";
import { UserPassword } from "./userPassword";
import { UserStatus } from "./userStatus";
import { from } from 'rxjs';



let routing = RouterModule.forChild([
            {
                path: 'edit/account/user/:id', component: UserAccount,
                canActivate: [UserLoginGuard]
            }, 
            {
                path: "edit/password/user/:id", component: UserPassword,
                canActivate: [UserLoginGuard]
            },
            {
                path: 'reviews/user/:id', component: UserReviews,
                canActivate: [UserLoginGuard]
            }, 
            {
                path: "orders/user/:id", component: UserOrders,
                canActivate: [UserLoginGuard]
            },
            {
                path: "users/:id", component: Sidebar,
                canActivate: [UserLoginGuard]
            },
            {
                path: "userAccount", component: UserAccount,
                canActivate: [UserLoginGuard]
            },
            {
                path: "userPassword", component: UserPassword,
                canActivate: [UserLoginGuard]
            },
            {
                path: "userReviews", component: UserReviews,
                canActivate: [UserLoginGuard]
            },
            {
                path: "userLogin", component: UserLogin,
                canActivate: [UserLoginGuard]
            },
            { path: "**", redirectTo: "userLogin" }
        ]);

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule, routing],
    declarations: [UserOrders, UserReviews, UserAccount, UserPassword, UserLogin, Sidebar],
    providers: [UserOrders, UserReviews, UserAccount, UserPassword, UserLogin, UserLoginService, UserLoginGuard, Sidebar, UserStatus, Accounts, Orderstack, Reviewstack],
    exports: [UserLogin]
})
export class UserModule {}