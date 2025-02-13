import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './pages/products/products.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './pages/auth/auth.module';
import { ProductsModule } from './pages/products/products.module';
import { HomeModule } from './pages/home/home.module';
import { CheckoutModule } from './pages/checkout/checkout.module';
import { ProductsService } from './core/services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CartService } from './core/services/cart.service';
import { AuthService } from './core/services/auth.service';
import { ToastService } from './core/services/toast.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    ProductsModule,
    HomeModule,
    CheckoutModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [ProductsService, CartService, AuthService, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
