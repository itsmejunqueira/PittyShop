import { SafeResourceUrl } from "@angular/platform-browser";

export type TProducts = {
    id?: number;
    photo: string | SafeResourceUrl;
    name: string;
    description: string;
    price: string;
}
