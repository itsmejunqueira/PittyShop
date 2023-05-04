import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './pages/auth/auth.module';
import { ProductsModule } from './pages/products/products.module';
import { HomeModule } from './pages/home/home.module';
import { CartModule } from './pages/cart/cart.module';
import { ProductsService } from './core/services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CartService } from './core/services/cart.service';
import { ModalOrderSucessComponent } from './pages/cart/modal-order-sucess/modal-order-sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    ModalOrderSucessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    ProductsModule,
    HomeModule,
    CartModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
