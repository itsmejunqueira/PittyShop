import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
import { RecoveryPassComponent } from "./recovery-pass/recovery-pass.component";

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      children: [
    { path: 'new-password', component: NewPasswordComponent },
    { path: 'reset-password', component: RecoveryPassComponent },
      ]
    }
  ];
  
  @NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })
  export class authRoutingModule {}