import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { HttpRequests } from '../sources/http.requests';

@Injectable()
export class LoginService {

    constructor(private httpReq: HttpRequests) {}
    
    authenticate(username: string, password: string): Observable<boolean> {
        return this.httpReq.login(username, password);
    }
    get loggedIn(): boolean {
        return this.httpReq.token != null;
    }
    clear() {
        this.httpReq.token = null;
    }
}