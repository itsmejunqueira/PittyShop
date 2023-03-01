import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PetsComponent } from './pages/pets/pets.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [],
  children: [
    { path: 'products', component: ProductsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'pets', component: PetsComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
