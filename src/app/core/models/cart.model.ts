import { SafeResourceUrl } from "@angular/platform-browser";

export class CartItem {
    constructor(
        public id: number | undefined,
        public name: string,
        public photo: string | SafeResourceUrl,
        public quantity: number,
        public price: number,
        ){}
}


  