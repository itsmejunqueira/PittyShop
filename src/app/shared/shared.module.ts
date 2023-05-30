import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadTooltipDirective } from './directives/load-tooltip.directive';
import { ToastComponent } from './toast/toast.component';
import { ToasterComponent } from './toaster/toaster.component';

@NgModule({
  declarations: [
    NavBarComponent,
    LoadTooltipDirective,
    ToastComponent,
    ToasterComponent
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    NavBarComponent,
    LoadTooltipDirective,
    ToastComponent,
    ToasterComponent
  ],
})
export class SharedModule {}
