import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/core/models/cart.model';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public itemsCart: CartItem[] = [];

  constructor(
    private _ProductsService: ProductsService,
    public readonly route: ActivatedRoute,
    public _CartService: CartService
  ) {}

  ngOnInit() {
    this.itemsCart = this._CartService.showItens();
    console.log(this.itemsCart);
  }

  public adicionar(item: CartItem): void {
    this._CartService.adicionarQuantidade(item);
  }
  public diminuir(item: CartItem): void {
    this._CartService.diminuirQuantidade(item);
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0;
    this.itemsCart.map((item: CartItem) => {
      total = total + item.price * item.quantity;
    });
    return total;
  }
}
