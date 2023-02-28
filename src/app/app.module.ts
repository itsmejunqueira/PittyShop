import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPasswordComponent } from './pages/account/new-password/new-password.component';
import { RecoveryPassComponent } from './pages/account/recovery-pass/recovery-pass.component';
import { SingInComponent } from './pages/account/sing-in/sing-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NewPasswordComponent,
    RecoveryPassComponent,
    SingInComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
