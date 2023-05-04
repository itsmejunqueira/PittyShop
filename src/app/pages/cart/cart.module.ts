import { NgModule } from "@angular/core";
import { ShoppingOrderComponent } from './shopping-order/shopping-order.component';
import { CartService } from "src/app/core/services/cart.service";

@NgModule({
    declarations: [
     ShoppingOrderComponent
  ],
    imports: [
       
     ],
     providers: [CartService]
})
export class CartModule {}