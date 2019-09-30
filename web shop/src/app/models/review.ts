export class Review {

    constructor(
        public articleNr?: number,
        public article?: string,
        public image?: string,
        public title?: string,
        public rating?: number,
        public text?: string,
        public date?: string | number,
        public name?: string,
        public email?: string | number,
        public id?: number) 
        {
            this.articleNr = articleNr;
            this.article = article;
            this.image = image;
            this.title = title;
            this.rating = rating;
            this.text = text;
            this.date = date;
            this.name = name;
            this.email = email;
            this.id = id;
        }

}