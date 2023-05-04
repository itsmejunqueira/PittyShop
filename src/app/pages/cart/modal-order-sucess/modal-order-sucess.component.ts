import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-order-sucess',
  templateUrl: './modal-order-sucess.component.html',
  styleUrls: ['./modal-order-sucess.component.scss'],
})
export class ModalOrderSucessComponent {
  @Input() public idOrderCompra: number | undefined;

  constructor() {}

  ngOnInit() {}
}
