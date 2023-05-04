import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingOrderComponent } from './shopping-order.component';

describe('ShoppingOrderComponent', () => {
  let component: ShoppingOrderComponent;
  let fixture: ComponentFixture<ShoppingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
