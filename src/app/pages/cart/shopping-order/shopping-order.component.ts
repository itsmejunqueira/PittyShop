import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItem } from 'src/app/core/models/cart.model';
import { Order } from 'src/app/core/models/order.model';
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
      this.form.get('address')?.markAsTouched();
      this.form.get('number')?.markAsTouched();
      this.form.get('complement')?.markAsTouched();
      this.form.get('paymentMenthod')?.markAsTouched();
    } else {
      if (this._CartService.showItens().length === 0) {
        alert('Você não selecionou nenhum item');
      } else {
        let order: Order = new Order(
          this.form.value.address,
          this.form.value.number,
          this.form.value.complement,
          this.form.value.paymentMenthod,
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
