import { CartItem } from "./cart.model";

export class Order {
    constructor(
        public address: string,
        public number: string,
        public complement: string,
        public paymentMenthod: string,
        public itens: Array<CartItem>
    ){}
}