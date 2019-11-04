import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { LoginService } from "./loginService";

@Injectable()
export class LoginGuard {

    constructor(private router: Router, private auth: LoginService) { } 
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.authenticate) {
            this.router.navigateByUrl("/admin/login");
            return false;
        }
        return true;
    }
}