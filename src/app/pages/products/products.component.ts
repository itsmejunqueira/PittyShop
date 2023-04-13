import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { TProducts } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  checked = true;
  selectedPet: string = "" ;
  filters: any[] =  [
    {
      name: 'Categorias',
      id: '1',
      data: [
        {
          name: 'Alimentação',
          id: '1',
          data: [],
        },
        {
          name: 'Medicina e Saúde',
          id: '2',
          data: [],
        },
        {
          name: 'Higiene e Limpeza',
          id: '3',
          data: [],
        },   
        {
          name: 'Ossinhos e Petiscos',
          id: '3',
          data: [],
        },     
        {
          name: 'Brinquedos',
          id: '3',
          data: [],
        },
        {
          name: 'Acessórios para Alimentação',
          id: '3',
          data: [],
        },
        {
          name: 'Shampoos e Cosméticos',
          id: '3',
          data: [],
        },
        {
          name: 'Adestramento e Comportamento',
          id: '3',
          data: [],
        },
        {
          name: 'Roupas e Acessórios ',
          id: '3',
          data: [],
        },        
        {
          name: 'Caixas e Bolsas de Transporte',
          id: '3',
          data: [],
        },
        {
          name: 'Caminhas e Outros',
          id: '3',
          data: [],
        }, 
        {
          name: 'Casinhas e Acessórios Coleiras',
          id: '3',
          data: [],
        }, ,
        {
          name: 'Guias e Peitorais',
          id: '3',
          data: [],
        }, 
      ],
    },
    {
      name: 'Subcategorias',
      id: '1',
      data: [
        {
          name: 'Ração Seca',
          id: '1',
          data: [],
        },
        {
          name: 'Ração Úmida',
          id: '2',
          data: [],
        },
        {
          name: 'Ração Medicamentosa',
          id: '3',
          data: [],
        },        
      ],
    },
    {
      name: 'Marcas',
      id: '2',
      data: [ 
         {
        name: 'Natural',
        id: '1',
        data: [],
      },
      {
        name: 'Biofresh',
        id: '2',
        data: [],
      },
      {
        name: 'N&D',
        id: '3',
        data: [],
      },
      {
        name: 'Seleção Natural',
        id: '3',
        data: [],
      },
      {
        name: 'Golden',
        id: '3',
        data: [],
      },
      {
        name: 'Seleção Natural',
        id: '3',
        data: [],
      },
      ],
    },
    {
      name: 'Raças',
      id: '3',
      data: [
        {
          name: 'Raças Pequenas',
          id: '3',
          data: [],
        },
        {
          name: 'Raças Medias',
          id: '3',
          data: [],
        },
        {
          name: 'Raças Grandes',
          id: '3',
          data: [],
        },
      ],
    },
    {
      name: 'Idade',
      id: '4',
      data: [
        {
          name: 'Filhotes',
          id: '4',
          data: [],
        },
        {
          name: 'Adultos',
          id: '4',
          data: [],
        },
        {
          name: 'Idosos',
          id: '4',
          data: [],
        },
      ],
    },
    {
      name: 'Sabor',
      id: '4',
      data: [
        {
          name: 'Frango',
          id: '4',
          data: [],
        },
        {
          name: 'Carne',
          id: '4',
          data: [],
        },
        {
          name: 'Salmão',
          id: '4',
          data: [],
        },
        {
          name: 'Cordeiro',
          id: '4',
          data: [],
        },
        {
          name: 'Frutas',
          id: '4',
          data: [],
        },
        {
          name: 'Vegetais',
          id: '4',
          data: [],
        },
        {
          name: 'Cereais',
          id: '4',
          data: [],
        },
        {
          name: 'Peru',
          id: '4',
          data: [],
        },
      ],
    },
    {
      name: 'Tamanho do Grão',
      id: '4',
      data: [
        {
          name: 'Grão Pequeno ',
          id: '4',
          data: [],
        },
        {
          name: 'Grão medio ',
          id: '4',
          data: [],
        },
        {
          name: 'Grão Mini',
          id: '4',
          data: [],
        },
        {
          name: 'Grão grande',
          id: '4',
          data: [],
        },
        
      ],
    },
    {
      name: 'Indicação Veterinária',
      id: '4',
      data: [
        {
          name: 'Alérgico ',
          id: '4',
          data: [],
        },
        {
          name: 'Intestinais',
          id: '4',
          data: [],
        },
        {
          name: 'Renal',
          id: '4',
          data: [],
        },
        {
          name: 'Diabeticos',
          id: '4',
          data: [],
        },
        
      ],
    },
    {
      name: 'Formula Natural',
      id: '4',
      data: [
        {
          name: 'Sem corante',
          id: '4',
          data: [],
        },
        {
          name: 'Sem trangênicos',
          id: '4',
          data: [],
        },
        {
          name: 'Castrados',
          id: '4',
          data: [],
        },
        {
          name: 'Dieta caseira',
          id: '4',
          data: [],
        },
        
      ],
    },
    {
      name: 'Preço',
      id: '4',
      data: [
        {
          name: 'até R$10',
          id: '4',
          data: [],
        },
        {
          name: 'de R$10 até 30',
          id: '4',
          data: [],
        },
        {
          name: 'de R$30 até 50',
          id: '4',
          data: [],
        },
        {
          name: 'de R$50 até 100',
          id: '4',
          data: [],
        },
        {
          name: 'de R$100 até 150',
          id: '4',
          data: [],
        },
        
      ],
    },
    {
      name: 'Tipo de Ração',
      id: '4',
      data: [
        {
          name: 'Natural',
          id: '4',
          data: [],
        },
        {
          name: 'Super premium',
          id: '4',
          data: [],
        },
        {
          name: 'Premium especial',
          id: '4',
          data: [],
        },
        {
          name: 'Premium',
          id: '4',
          data: [],
        },        
      ],
    },
  ];
  public products:TProducts[] = [];

  constructor(
    private _ProductsService: ProductsService,
    public readonly route: ActivatedRoute,

  ) {}
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    const { params } = this.route.snapshot;
    if (params['category'] == 'dogs' )
     this.selectedPet = 'Cachorro'   
     if (params['category'] == 'cats' )
     this.selectedPet = 'Gato'   
    this._ProductsService.getAllproducts(params['category']).subscribe((productsResult)=>{
      this.products = productsResult;
    });
  }

  public checkItem(item:any): void {
     this.checked = !this.checked;
  }
 
  
}
