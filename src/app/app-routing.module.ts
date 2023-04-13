import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./shared/shared.module').then(
  //       (m) => m.SharedModule
  //     ),
  //   canActivate: [],
  // },
  {
    path: '',
    canActivate: [],
    component: HomeComponent,
  },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
