import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShop } from './mobile-shop';

describe('MobileShop', () => {
  let component: MobileShop;
  let fixture: ComponentFixture<MobileShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShop],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileShop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
