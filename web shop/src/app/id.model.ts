import { Injectable } from '@angular/core';

@Injectable()
export class ID {

    public id: number;

    constructor() {
        this.id = 1;
    }

    addId(id: number){
        this.id = id;
    }

}