import { SafeResourceUrl } from "@angular/platform-browser";

export type TProducts = {
    id?: number;
    photo: string | SafeResourceUrl;
    name: string;
    quantity: number;
    price: number;
}

// public id: number
// public categoria: string
// public titulo: string
// public descricao_oferta: string
// public valor: number
// public imagens: Array<object>