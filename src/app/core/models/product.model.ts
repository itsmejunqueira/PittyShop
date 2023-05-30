import { SafeResourceUrl } from "@angular/platform-browser";

export type TProducts = {
    id?: number;
    photo: string | SafeResourceUrl;
    name: string;
    quantity: number;
    price: number;
}
