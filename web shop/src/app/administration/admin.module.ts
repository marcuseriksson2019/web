import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Administration } from './administration';
import { ProductEdit } from './productEdit';
import { Orders } from './orders';
import { OrderEdit } from './orderEdit';
import { Login } from './login';
import { LoginService } from './loginService';
import { LoginGuard } from './login.guard';
import { New } from './new';
import { AdminLogo } from "./adminlogo";
import { from } from 'rxjs';

let routing = RouterModule.forChild([
            {
                path: "login", component: Login,
                canActivate: [LoginGuard]
            },
            {
                path: "products/edit/:id", component: ProductEdit,
                canActivate: [LoginGuard]
            },
            {
                path: "products", component: Administration,
                canActivate: [LoginGuard]
            },
            {
                path: "products/create", component: New,
                canActivate: [LoginGuard]
            },
            {
                path: 'orders/edit/:id', component: OrderEdit,
                canActivate: [LoginGuard]
            }, 
            {
                path: "orders", component: Orders,
                canActivate: [LoginGuard]
            },
            { path: "**", redirectTo: "login" }
        ]);

@NgModule({
    imports: [FormsModule, CommonModule, routing],
    declarations: [Administration, OrderEdit, Orders, ProductEdit, New, Login, AdminLogo],
    providers: [Administration, OrderEdit, Orders, ProductEdit, New, LoginGuard, AdminLogo, LoginService, Login]
})
export class AdminModule {}