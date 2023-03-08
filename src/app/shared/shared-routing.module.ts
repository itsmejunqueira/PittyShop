import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [{
  path: '',
  component: NavBarComponent,
  children: [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full',
    },
    
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
