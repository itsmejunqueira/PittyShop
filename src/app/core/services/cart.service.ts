import { Order } from './../models/order.model';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { TProducts } from '../models/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  public itens: CartItem[] =[];

  constructor() { }

  public showItens(): CartItem[]{
    return this.itens
  }

  public addItem(TProducts: TProducts): void {
    let itemCarrinho: CartItem = new CartItem(
        TProducts.id,
        TProducts.name,
        TProducts.photo,
        1,
        TProducts.price,        
    )

    //verificar se o item em questão já não existe dentro de this.itens
    let itemCarrinhoEncontrado = this.itens.find((item: CartItem) => item.id === itemCarrinho.id)
    if (itemCarrinhoEncontrado) {
        itemCarrinhoEncontrado.quantity += 1
    } else {
        this.itens.push(itemCarrinho)
    }

}
public totalCarrinhoCompras(): number {
  let total: number = 0
  this.itens.map((item: CartItem) => {
      total = total + (item.price * item.quantity)
  })
  return total
}

public adicionarQuantidade(itemCarrinho: CartItem): void {
  let itemCarrinhoEncontrado = this.itens.find((item: CartItem) => item.id === itemCarrinho.id)
  if(itemCarrinhoEncontrado){
      itemCarrinhoEncontrado.quantity += 1
  }
}

public diminuirQuantidade(itemCarrinho: CartItem):void {
  let itemCarrinhoEncontrado = this.itens.find((item: CartItem) => item.id === itemCarrinho.id)
  if(itemCarrinhoEncontrado){
      itemCarrinhoEncontrado.quantity -= 1

      if(itemCarrinhoEncontrado.quantity === 0) {
          this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1)
      }
  }
}
public clearCart(): void {
  this.itens = []
}

effectBuy(order: Order) {
  return of (10)
}

}