import { Product } from "./product"

export class Order {

    constructor(
        public id?: number,
        public ordernumber?: number,
	public date?: string | number,
        public firstname?: string,
        public lastname?: string,
        public street?: string | number,
        public city?: string,
        public zipcode?: number,
        public country?: string,
        public phone?: number,
        public email?: string, 
        public articles?: Product[],
	public total?: number,
	public VAT?: number,
        public shipped?: boolean) 
        {
                this.id = id;
                this.ordernumber = ordernumber;
                this.date = date;
                this.firstname = firstname;
                this.lastname = lastname;
                this.street = street;
                this.city = city;
                this.zipcode = zipcode;
                this.country = country;
                this.phone = phone;
                this.email = email;
                this.articles = articles;
                this.total = total;
                this.VAT = VAT;
                this.shipped = shipped;

        }

}