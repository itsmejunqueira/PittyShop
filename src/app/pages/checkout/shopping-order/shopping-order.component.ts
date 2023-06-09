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
  public idOrderPurchase: number | undefined;
  public itemsCart: CartItem[] = [];
  //public order: Order = new Order[];

  public address: string = ''
  public number: string = ''
  public complement: string = ''
  public payment: string = ''

  //controles de validação dos campos
  public addressValid: boolean| undefined
  public numberValid: boolean| undefined
  public complementValid: boolean | undefined
  public cepValid: boolean | undefined
  public cityValid: boolean | undefined
  public paymentValid: boolean | undefined

  //estados primitivos dos campos (pristine)
  public addressState: boolean = true
  public numberState: boolean = true
  public complementState: boolean = true
  public cityState: boolean = true
  public paymentState: boolean = true
  public cepState: boolean = true


  //controlar botão confirmar compra
  public formEstado: string = 'disabled'
  public form: FormGroup = new FormGroup({
    address: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    complement: new FormControl(null, [Validators.required]),
    cep: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    payment: new FormControl(null, [Validators.required]),
  });

  constructor(private _CartService: CartService) {}
  ngOnInit() {
    this.itemsCart = this._CartService.showItens();
    console.log(this.itemsCart);
  }


  public updateAddress(address: string): void {
    this.address = address
    //console.log(this.address)  
    this.addressState = false
    //se a string for maior que 3
    if (this.address.length > 3) {
      this.addressValid = true
    } else {
      this.addressValid = false
    }
    this.enableForm()
  }

  public updateNumber(number: string): void {
    this.number = number
    // console.log(this.number)
    this.numberState = false
    if (this.number.length > 0) {
      this.numberValid = true
    } else {
      this.numberValid = false
    }
    this.enableForm()
  }

  public updateComplement(complement: string): void {
    this.complement = complement
    // console.log(this.complement)
    this.complementState = false
    if (this.complement.length > 0) {
      this.complementValid = true
    }

    this.enableForm()
  }

  public updatePayment(payment: string): void {
    this.payment = payment
    // console.log(payment)
    this.paymentState = false
    if (this.payment.length > 0) {
      this.paymentValid = true
    } else {
      this.paymentValid = false
    }
    this.enableForm()
  }

  public enableForm(): void {
    if (this.addressValid === true && this.numberValid === true && this.paymentValid === true) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  public confirmPurchase(): void {
    if (this.form.status === 'INVALID') {
      this.form.get('address')?.markAsTouched();
      this.form.get('number')?.markAsTouched();
      this.form.get('complement')?.markAsTouched();
      this.form.get('payment')?.markAsTouched();
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

        this._CartService.effectPurchase(order).subscribe((idOrder: number) => {
          this.idOrderPurchase = idOrder;
          this._CartService.clearCart();
        });
      }
    }
  }



}
