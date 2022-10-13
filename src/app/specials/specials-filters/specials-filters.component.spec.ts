import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsFiltersComponent } from './specials-filters.component';

describe('SpecialsFiltersComponent', () => {
  let component: SpecialsFiltersComponent;
  let fixture: ComponentFixture<SpecialsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
