import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TProducts } from 'src/app/core/models/product.model';

@Injectable()
export class ProductsService {
  productListDogs: TProducts[] = [
    {
      id: 1,
      photo:
        '../../assets/img/produtos/Ração-Fórmula-Natural-Super-Premium-para-Cães-Adultos-Raças-Mini-e-Pequena.jpg',
      name: 'Ração seca Fórmula Natural Cães Adultos 1kg',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 2,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Pedigree_Sachê_Carne_ao_Molho_para_Cães_Filhotes.jpg',
      name: 'Sachê carne pedigree filhotes',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 3,
      photo: '../../assets/img/produtos/Ração-umida-pet-delicia-senior.jpg',
      name: 'PET Delicia Sênior Patê natural 320g',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 4,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Pet_Delícia_Natural_Caçarolinha_de_Carne_320_g.jpg',
      name: 'PET Delicia Caçarolinha de carne 320g',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 5,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Pet_Delícia_Natural_Risotinho_de_Frango_Fácil_Digestão_320_g.jpg',
      name: 'PET Delicia Risotinho de frango 320g',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 6,
      photo:
        '../../assets/img/produtos/Ração_Premier_Pet_Ambientes_Internos_Cães_Filhotes_Frango_e_Salmão_-_12_Kg_3108262-3_1.jpg',
      name: 'Ração seca PREMIER filhotes  Frango e Salmão 12kg',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 7,
      photo:
        '../../assets/img/produtos/Ração_Royal_Canin_Sachê_Size_Health_Nutrition_Puppy_Wet_Cães_Adultos_Raças_Pequenas_a_partir_de_12_Anos_de_Idade_-_85_g_2414395.jpg',
      name: 'Ração umida Royal Canin 12+ 85g',
      quantity: 5,
      price: 120.00   
    },
    {
      id: 8,
      photo:
        '../../assets/img/produtos/Ração_Seca_Nestlé_Purina_Pro_Plan_Pele_Sensível_Salmão_Cães_Adultos_Raças_Médias_e_Grandes_3110440_15kg.jpg',
      name: 'Ração seca PROPLAN pele sensivel salmão 15kg',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 9,
      photo:
        '../../assets/img/produtos/Ração_Úmida_True_Mixer_Carne__Batata_Doce_e_Ervilha.png',
      name: 'Ração Úmida True Mixer Carne Batata Doce e Ervilha',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 10,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Pet_Delícia_Natural_Frango_com_Maçã_Fit_Light.jpg',
      name: 'Ração Úmida Pet Delícia Natural Frango com Maçã Light',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 11,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Pet_Delícia_Natural_Dieta_Hipercalórica.jpg',
      name: 'Ração Úmida Pet Delícia Natural Dieta Hipercalórica',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 12,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Nestlé_Purina_Dog_Chow_Sachê_Carne_ao_Molho_para_Cães_Adultos.jpg',
      name: 'Ração Úmida Purina Dog Chow Carne ao Molho Cães Adultos',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 13,
      photo:
        '../../assets/img/produtos/Ração_Seca_True_para_Cães_Adultos_Raças_Médias_e_Grandes_10kg.png',
      name: 'Ração Seca True para Cães Adultos Raças Médias e Grandes 10kg',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 14,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Pet_Delícia_Natural_Dieta_Hipercalórica.jpg',
      name: 'Ração Úmida Pet Delícia Natural Dieta Hipercalórica',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 15,
      photo: '../../assets/img/produtos/Hils_Ração_PDiet__ZD_Canine.jpg',
      name: 'Ração umida Hils Diet',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 16,
      photo: '../../assets/img/produtos/sache-premier.jpg',
      name: 'Sache Premier',
      quantity: 5,
      price: 120.00     
    },
    {
      id: 16,
      photo:
        '../../assets/img/produtos/Biscoito_PremieR_Pet_Cookie_Sabor_Original_para_Cães_Idosos.jpg',
      name: 'Biscoito PremieR Cookie Cães Idosos',
      quantity: 5,
      price: 120.00 
    },
  ];
  productListCats: TProducts[] = [
    {
      id: 1,
      photo:
        '../../assets/img/produtos/Ração_Affinity_PetCare_GranPlus_Frango_e_Arroz_para_Gatos_Castrados_Adultos_1.jpg',
      name: 'Ração Affinity PetCare GranPlus Frango e Arroz 1kg',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 2,
      photo: '../../assets/img/produtos/arranhador-papelao.jpg',
      name: 'Arranhador papelao',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 3,
      photo:
        '../../assets/img/produtos/Areia_Sanitária_Kelco_Pipicat_Multicat.jpg',
      name: 'Areia Sanitária Kelco Pipicat',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 4,
      photo: '../../assets/img/produtos/Catnip_Chalesco_Erva_de_Gato.jpg',
      name: 'Catnip Chalesco Erva de Gato',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 5,
      photo:
        '../../assets/img/produtos/Granulado_Higiênico_0005_16_ORIGINAL_20KG.jpg',
      name: 'Granulado Higiênico',
      quantity: 5,
      price: 120.00 
    },
    {
      id: 6,
      photo:
        '../../assets/img/produtos/Antipulgas_Combo_Advocate_Elanco_para_Gatos_de_4_a_8_Kg.png',
      name: 'Antipulgas Combo Advocate Elanco',
      quantity: 5,
      price: 120.00
    },
    {
      id: 7,
      photo:
        '../../assets/img/produtos/Petisco_Nestlé_Purina_DentaLife_para_Gatos.jpg',
      name: 'Petisco Nestlé Purina DentaLife para Gatos',
      quantity: 5,
      price: 120.00
    },
    {
      id: 8,
      photo:
        '../../assets/img/produtos/Ração_Royal_Canin_Feline_Veterinary_Diet_Urinary.jpg',
      name: 'Ração Royal Canin Feline Veterinary Diet Urinary',
      quantity: 5,
      price: 120.00
    },
    {
      id: 9,
      photo:
        '../../assets/img/produtos/Antipulgas_Combo_Advocate_Elanco_para_Gatos_de_4_a_8_Kg.png',
      name: 'Antipulgas Combo Advocate Elanco para Gatos 4-8KG',
      quantity: 5,
      price: 120.00
    },
    {
      id: 10,
      photo:
        '../../assets/img/produtos/Whiskas_Petisco_Temptations_AntiBoladePelo.jpg',
      name: 'Whiskas Petisco Temptations AntiBoladePelo',
      quantity: 5,
      price: 120.00
    },
    {
      id: 11,
      photo:
        '../../assets/img/produtos/Ração_Úmida_Pet_Delícia_Natural_Dieta_Hipercalórica.jpg',
      name: 'Ração Úmida Pet Delícia Natural Dieta Hipercalórica',
      quantity: 5,
      price: 120.00
    },
    {
      id: 12,
      photo:
        '../../assets/img/produtos/Ração_Seca_PremieR_Pet_Golden_Salmão_para_Gatos_Adultos_Castrado.jpg',
      name: 'Ração Seca PremieR Pet Golden Salmão para Gatos Adultos Castrado',
      quantity: 5,
      price: 120.00
    },
    {
      id: 13,
      photo:
        '../../assets/img/produtos/Ração_Seca_True_para_Cães_Adultos_Raças_Médias_e_Grandes_10kg.png',
      name: 'Ração Seca True para Cães Adultos Raças Médias e Grandes 10kg',
      quantity: 5,
      price: 120.00
      },
  ];
  
  CategoryBanners = {
    dogs: 'assets/img/cachorro.jpg',
    cats: 'assets/img/gatos.jpg',
  }
  constructor() {}

  public getAllproducts(category: string): Observable<TProducts[]> {
    if (category == 'dogs') return of(this.productListDogs);
    if (category == 'cats') return of(this.productListCats);
    else return of(this.productListDogs);
  }
  public getCategoryImg(category: string): Observable<string> {
    if (category == 'dogs') return of(this.CategoryBanners[category]);
    if (category == 'cats') return of(this.CategoryBanners[category]);
    else return of(this.CategoryBanners['dogs']);
  }
}
