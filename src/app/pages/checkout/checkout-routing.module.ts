import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { ShoppingOrderComponent } from './shopping-order/shopping-order.component';
import { ModalOrderSucessComponent } from './modal-order-sucess/modal-order-sucess.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      { path: '', component: CartComponent },
      { path: 'shopping-order', component: ShoppingOrderComponent },
      { path: 'modal-order-sucess', component: ModalOrderSucessComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
