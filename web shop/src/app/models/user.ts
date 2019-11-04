import { Order } from "./order";

export class User {

    constructor(
        public firstname?: string,
        public lastname?: string,
        public street?: string | number,
        public zipcode?: number,
        public city?: string,
        public country?: string,
        public phone?: number,
        public email?: string,
        public username?: any,
        public password?: any,
        public loggedIn?: boolean,
        //public orders?: number,
        public id?: number) 
        {
            this.firstname = firstname;
            this.lastname = lastname;
            this.street = street;
            this.zipcode = zipcode;
            this.city = city;
            this.country = country;
            this.phone = phone;
            this.email = email;
            this.username = username;
            this.password = password;
            this.loggedIn = loggedIn;
            //this.orders = orders;
            this.id = id;

        }

}