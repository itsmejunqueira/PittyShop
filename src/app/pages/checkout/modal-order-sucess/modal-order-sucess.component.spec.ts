import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrderSucessComponent } from './modal-order-sucess.component';

describe('ModalOrderSucessComponent', () => {
  let component: ModalOrderSucessComponent;
  let fixture: ComponentFixture<ModalOrderSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOrderSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalOrderSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
