export class Product {

    constructor(
        public id?: number,
        public articleNr?: number,
        public article?: string,
        public brand?: string,
        public size?: number | string,
        public color?: string,
        public descr?: string,
        public gender?: string,
        public department?: string,
        public subdepartment?: string,
        public price?: number,
        public imageUrl?: string,
        public imageUrl2?: string,
        public quantity?: number) {}
}