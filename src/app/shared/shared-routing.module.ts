import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../pages/cart/cart.component';
import { PetsComponent } from '../pages/pets/pets.component';
import { ProductsComponent } from '../pages/products/products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [{
  path: '',
  component: NavBarComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () =>
        import('../pages/dashboard/dashboard.component').then(
          (m) => m.DashboardComponent
        ),
      canActivate: [],
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full',
    },
    { path: 'pets', canActivate: [], component: PetsComponent },
    { path: 'products', component: ProductsComponent },
     { path: 'cart', component: CartComponent },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
