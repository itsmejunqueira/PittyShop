import { NgModule } from "@angular/core";
import { ShoppingOrderComponent } from './shopping-order/shopping-order.component';
import { CartService } from "src/app/core/services/cart.service";
import { ModalOrderSucessComponent } from "./modal-order-sucess/modal-order-sucess.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
     ShoppingOrderComponent,
     ModalOrderSucessComponent
  ],
    imports: [
      ReactiveFormsModule,
      FormsModule
       
     ],
     providers: [CartService]
})
export class CartModule {}