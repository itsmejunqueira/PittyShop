import { NgModule } from "@angular/core";
import { ShoppingOrderComponent } from './shopping-order/shopping-order.component';
import { ModalOrderSucessComponent } from "./modal-order-sucess/modal-order-sucess.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CartComponent } from './cart/cart.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CheckoutComponent } from "./checkout.component";

@NgModule({
    declarations: [
        CheckoutComponent,
        CartComponent,
        ShoppingOrderComponent,
        ModalOrderSucessComponent,
    ],
    providers: [],
    imports: [
        CheckoutRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        CommonModule
    ]
})
export class CheckoutModule {}