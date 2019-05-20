import { Product } from "./product.model"

export class Order {

    constructor(
        public ordernumber?: number,
	public date?: string | number,
        public firstname?: string,
        public lastname?: string,
        public street?: string,
        public city?: string,
        public zipcode?: number,
        public country?: string,
        public phone?: number,
        public articles?: Product[],
	public total?: number,
	public VAT?: number,
        public shipped?: boolean) {}

}