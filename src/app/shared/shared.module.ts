import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadTooltipDirective } from './directives/load-tooltip.directive';


@NgModule({
  declarations: [
    NavBarComponent,
    LoadTooltipDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    NavBarComponent,
    LoadTooltipDirective
  ]
})
export class SharedModule { }
