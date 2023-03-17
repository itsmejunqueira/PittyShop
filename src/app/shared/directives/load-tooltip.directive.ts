// load-tooltip.directive.ts
import { Directive, ElementRef } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Directive({
  selector: '[Tooltip]'
})
export class LoadTooltipDirective {
  constructor(private el: ElementRef) {
    new Tooltip(el.nativeElement)
  }
}