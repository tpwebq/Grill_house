import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsS2Component } from './specials-s2.component';

describe('SpecialsS2Component', () => {
  let component: SpecialsS2Component;
  let fixture: ComponentFixture<SpecialsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
