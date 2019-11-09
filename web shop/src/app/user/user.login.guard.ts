import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { UserLoginService } from "./userLoginService";

@Injectable()
export class UserLoginGuard {

    constructor(private router: Router, private auth: UserLoginService) { } 
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.authenticate) {
            this.router.navigateByUrl("/user/userLogin");
            return false;
        }
        return true;
    }
}