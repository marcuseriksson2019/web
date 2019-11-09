import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequests } from './http.requests';
import { Accounts } from "./accounts";
import { Orderstack } from "./orderstack";
import { Reviewstack } from "./reviewstack";
import { Stock } from "./stock";


@NgModule({
imports: [HttpClientModule, JsonpModule, HttpModule],
providers: [HttpRequests, Accounts, Orderstack, Reviewstack, Stock, HttpClientModule, JsonpModule, HttpModule]
})

export class SourceModule { }