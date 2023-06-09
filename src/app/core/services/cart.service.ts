
import { HttpClient } from '@angular/common/http';
import { Order } from './../models/order.model';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { TProducts } from '../models/product.model';
import { Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_API } from '../app.api';

@Injectable()
export class CartService {
  public itens: CartItem[] = [];

  constructor(private http: HttpClient) {}

  public showItens(): CartItem[] {
    return this.itens;
  }

  public addItem(TProducts: TProducts): void {
    let itemsCart: CartItem = new CartItem(
      TProducts.id,
      TProducts.name,
      TProducts.photo,
      1,
      TProducts.price
    );

    //verificar se o item em questão já não existe dentro de this.itens
    let cartItems = this.itens.find(
      (item: CartItem) => item.id === itemsCart.id
    );
    if (cartItems) {
      cartItems.quantity += 1;
    } else {
      this.itens.push(itemsCart);
    }
  }
  public totalCartShopp(): number {
    let total: number = 0;
    this.itens.map((item: CartItem) => {
      total = total + item.price * item.quantity;
    });
    return total;
  }

  public addQuantity(itemsCart: CartItem): void {
    let cartItems = this.itens.find(
      (item: CartItem) => item.id === itemsCart.id
    );
    if (cartItems) {
      cartItems.quantity += 1;
    }
  }

  public decreaseQuantity(itemsCart: CartItem): void {
    let cartItems = this.itens.find(
      (item: CartItem) => item.id === itemsCart.id
    );
    if (cartItems) {
      cartItems.quantity -= 1;

      if (cartItems.quantity === 0) {
        this.itens.splice(this.itens.indexOf(cartItems), 1);
      }
    }
  }
  public clearCart(): void {
    this.itens = [];
  }

  effectBuy(order: Order) {
    return of(10);
  }

  public effectPurchase(Order: Order): Observable<number> {
    let headers: Headers = new Headers();

    return this.http
      .post<Order>(
        `${URL_API}/Orders`,
        JSON.stringify(Order)
      ).pipe(
        map(result => {
          if(result.id)
            return result.id
          return 0;
        })
      )   
  }
}
