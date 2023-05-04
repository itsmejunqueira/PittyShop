import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-shopping-order',
  templateUrl: './shopping-order.component.html',
  styleUrls: ['./shopping-order.component.scss'],
})
export class ShoppingOrderComponent {
  public idOrderCompra: number | undefined;
  public itemsCart: CartItem[] = [];

  public form: FormGroup = new FormGroup({
    endereço: new FormControl(null, [Validators.required]),
    numero: new FormControl(null, [Validators.required]),
    complemento: new FormControl(null, [Validators.required]),
    formaPagamento: new FormControl(null, [Validators.required]),
  });

  constructor(private _CartService: CartService) {}
  ngOnInit() {
    this.itemsCart = this._CartService.showItens();
    console.log(this.itemsCart);
  }
  public confirmPurchase(): void {
    if (this.form.status === 'INVALID') {
      this.form.get('endereco').markAsTouched();
      this.form.get('numero').markAsTouched();
      this.form.get('complemento').markAsTouched();
      this.form.get('formaPagamento').markAsTouched();
    } else {
      if (this._CartService.showItens().length === 0) {
        alert('Você não selecionou nenhum item');
      } else {
        let Order: Order = new Order(
          this.form.value.endereco,
          this.form.value.numero,
          this.form.value.complemento,
          this.form.value.formaPagamento,
          this._CartService.showItens()
        );
        console.log(order);

        this._CartService.effectBuy(order).subscribe((idOrder: number) => {
          this.idOrderCompra = idOrder;
          this._CartService.clearCart();
        });
      }
    }
  }
}
