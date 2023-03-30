import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TProducts } from 'src/app/shared/models/product.model';

@Injectable()
export class ProductsService {

  productList: TProducts[] = [
    {
      id: 1,
      photo: "../../assets/img/1_3107895_Ração-Fórmula-Natural-Super-Premium-para-Cães-Adultos-Raças-Mini-e-Pequena.jpg",
      name: "Fórmula Natural 1kg",
      description: "Ração seca Fórmula Natural Super Premium para Cães Adultos",
      price: "R$37,90 ",
    },
    {
      id: 2,
      photo: "../../assets/img/1193906_Ração_Úmida_Pedigree_Sachê_Carne_ao_Molho_para_Cães_Filhotes_1.jpg",
      name: "Sachê carne pedigree filhotes",
      description: "MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.",
      price: "R$ 10.499,00",
    },
    {
      id: 3,
      photo: "../../assets/img/2291052__.jpg",
      name: "MacBook Air 512 GB 2021",
      description: "MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.",
      price: "R$ 13.499,00",
    },
    {
      id: 4,
      photo: "../../assets/img/3105784_Ração_Úmida_Pet_Delícia_Natural_Caçarolinha_de_Carne_-_320_g_(8).jpg",
      name: "MacBook Pro 2019 16'",
      description: "MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.",
      price: "R$ 12.499,00",
    },
  ]

  constructor() { }

  public getAllproducts(): Observable<TProducts[]> {
    return of(this.productList);
  }
  
}