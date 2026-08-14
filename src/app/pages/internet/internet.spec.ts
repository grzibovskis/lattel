import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Internet } from './internet';

describe('Internet', () => {
  let component: Internet;
  let fixture: ComponentFixture<Internet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Internet],
    }).compileComponents();

    fixture = TestBed.createComponent(Internet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
