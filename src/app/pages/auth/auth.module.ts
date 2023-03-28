import { AuthComponent } from './auth.component';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
import { RecoveryPassComponent } from "./recovery-pass/recovery-pass.component";



@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        NewPasswordComponent,
        RecoveryPassComponent,
    ],
    imports: [
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
     ]
})
export class AuthModule { }