import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { HttpRequests } from '../sources/http.requests';

@Injectable()
export class UserLoginService {

    constructor(private httpReq: HttpRequests) {}
    
    authenticate(username: string, password: string): Observable<boolean> {
        return this.httpReq.userLogin(username, password);
    }
    get loggedIn(): boolean {
        return this.httpReq.userToken != null;
    }
    clear() {
        this.httpReq.userToken = null;
    }
}