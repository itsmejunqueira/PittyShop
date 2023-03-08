import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PetsComponent } from './pages/pets/pets.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'login',
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
    path: 'dashboard',
    canActivate: [],
    component: DashboardComponent
  },
  { path: 'pets', canActivate: [], component: PetsComponent },
  { path: 'products', component: ProductsComponent },
   { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
