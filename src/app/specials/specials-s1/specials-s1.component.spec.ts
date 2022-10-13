import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsS1Component } from './specials-s1.component';

describe('SpecialsS1Component', () => {
  let component: SpecialsS1Component;
  let fixture: ComponentFixture<SpecialsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
