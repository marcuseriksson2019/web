import { Injectable } from "@angular/core";
import { Review } from "../models/review";
import { HttpRequests } from "./http.requests";


@Injectable()
export class Reviewstack {
    public reviews: Review[];

    constructor(private httpReq: HttpRequests) {
        this.reviews = new Array<Review>();
         this.httpReq.getReviews().subscribe(data => {
            this.reviews = data;
        });
    }
    
    postReview(review: Review) {
        this.httpReq.postReview(review).subscribe();
        this.reviews.push(review);
    }

    getReviews() {
        return this.reviews;
    }

    getData(): Review[] {
        return this.reviews;
    }

}