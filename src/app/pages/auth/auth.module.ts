import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { NewPasswordComponent } from "./new-password/new-password.component";
import { RecoveryPassComponent } from "./recovery-pass/recovery-pass.component";



@NgModule({
    declarations: [
        LoginComponent,
        NewPasswordComponent,
        RecoveryPassComponent,
    ],
    imports: []
})
export class AuthModule { }