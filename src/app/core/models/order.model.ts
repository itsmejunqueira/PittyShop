import { CartItem } from "./cart.model";

export class Order {
    public id: number | null = null;
    constructor(
        public address: string,
        public number: string,
        public complement: string,
        public paymentMenthod: string,
        public itens: Array<CartItem>
    ){}
}