import { TProducts } from './../../core/models/product.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { EventTypes } from 'src/app/shared/models/event-types';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  checked = true;
  selectedPet: string = '';
  filters: any[] = [
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
          id: '4',
          data: [],
        },
        {
          name: 'Brinquedos',
          id: '5',
          data: [],
        },
        {
          name: 'Acessórios para Alimentação',
          id: '6',
          data: [],
        },
        {
          name: 'Shampoos e Cosméticos',
          id: '7',
          data: [],
        },
        {
          name: 'Adestramento e Comportamento',
          id: '8',
          data: [],
        },
        {
          name: 'Roupas e Acessórios ',
          id: '9',
          data: [],
        },
        {
          name: 'Caixas e Bolsas de Transporte',
          id: '10',
          data: [],
        },
        {
          name: 'Caminhas e Outros',
          id: '11',
          data: [],
        },
        {
          name: 'Casinhas e Acessórios Coleiras',
          id: '12',
          data: [],
        },
        {
          name: 'Guias e Peitorais',
          id: '13',
          data: [],
        },
      ],
    },
    {
      name: 'Subcategorias',
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
      data: [
        {
          name: 'Filhotes',
          id: '1',
          data: [],
        },
        {
          name: 'Adultos',
          id: '2',
          data: [],
        },
        {
          name: 'Idosos',
          id: '3',
          data: [],
        },
      ],
    },
    {
      name: 'Sabor',
      id: '6',
      data: [
        {
          name: 'Frango',
          id: '1',
          data: [],
        },
        {
          name: 'Carne',
          id: '2',
          data: [],
        },
        {
          name: 'Salmão',
          id: '3',
          data: [],
        },
        {
          name: 'Cordeiro',
          id: '4',
          data: [],
        },
        {
          name: 'Frutas',
          id: '5',
          data: [],
        },
        {
          name: 'Vegetais',
          id: '6',
          data: [],
        },
        {
          name: 'Cereais',
          id: '7',
          data: [],
        },
        {
          name: 'Peru',
          id: '8',
          data: [],
        },
      ],
    },
    {
      name: 'Tamanho do Grão',
      id: '7',
      data: [
        {
          name: 'Grão Pequeno ',
          id: '1',
          data: [],
        },
        {
          name: 'Grão medio ',
          id: '2',
          data: [],
        },
        {
          name: 'Grão Mini',
          id: '3',
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
      id: '8',
      data: [
        {
          name: 'Alérgico ',
          id: '1',
          data: [],
        },
        {
          name: 'Intestinais',
          id: '2',
          data: [],
        },
        {
          name: 'Renal',
          id: '3',
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
      id: '9',
      data: [
        {
          name: 'Sem corante',
          id: '1',
          data: [],
        },
        {
          name: 'Sem trangênicos',
          id: '2',
          data: [],
        },
        {
          name: 'Castrados',
          id: '3',
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
      id: '10',
      data: [
        {
          name: 'até R$10',
          id: '1',
          data: [],
        },
        {
          name: 'de R$10 até 30',
          id: '2',
          data: [],
        },
        {
          name: 'de R$30 até 50',
          id: '43',
          data: [],
        },
        {
          name: 'de R$50 até 100',
          id: '4',
          data: [],
        },
        {
          name: 'de R$100 até 150',
          id: '5',
          data: [],
        },
      ],
    },
    {
      name: 'Tipo de Ração',
      id: '11',
      data: [
        {
          name: 'Natural',
          id: '1',
          data: [],
        },
        {
          name: 'Super premium',
          id: '2',
          data: [],
        },
        {
          name: 'Premium especial',
          id: '3',
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
  public products: TProducts[] = [];
  categoryImg: string = '';

  EventTypes = EventTypes;

  constructor(
    private toastService: ToastService,
    private _ProductsService: ProductsService,
    public readonly route: ActivatedRoute,
    private _CartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadProducts();
    });
  }

  loadProducts() {
    const { params } = this.route.snapshot;
    if (params['category'] == 'dogs') this.selectedPet = 'Cachorro';
    if (params['category'] == 'cats') this.selectedPet = 'Gato';
    this._ProductsService
      .getAllproducts(params['category'])
      .subscribe((productsResult) => {
        this.products = productsResult;
      });
    this._ProductsService
      .getCategoryImg(params['category'])
      .subscribe((productsResult) => {
        this.categoryImg = productsResult;
      });
  }

  public checkItem(item: any): void {
    this.checked = !this.checked;
  }

  public addCart(product: TProducts): void {
    this._CartService.addItem(product);
    console.log(this._CartService.showItens());
    this.toastService.showSuccessToast(
      'Sucesso!',
      'Produto adicionado ao carrinho.'
    );
  }

}
