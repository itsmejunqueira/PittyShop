// load-tooltip.directive.ts
import { Directive, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Directive({
  selector: '[Tooltip]'
})
export class LoadTooltipDirective {
  constructor(private el: ElementRef) {
    setTimeout(() => {
      new Tooltip(el.nativeElement)
    }, 1000);
  }
}