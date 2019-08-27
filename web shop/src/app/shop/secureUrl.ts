import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { Shop } from "./shop";

@Injectable()
export class SecureUrl {

    private initialUrlChange = true;

    constructor(private router: Router) { } 
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (this.initialUrlChange) {
            this.initialUrlChange = false;
            if (route.component != Shop) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}