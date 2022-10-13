import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialsRoutingModule } from './specials-routing.module';
import { SpecialsS1Component } from './specials-s1/specials-s1.component';
import { SpecialsS2Component } from './specials-s2/specials-s2.component';
import { SpecialsFiltersComponent } from './specials-filters/specials-filters.component';
import { SpecialsListComponent } from './specials-list/specials-list.component';
import { SpecialsComponent } from './specials.component';


@NgModule({
  declarations: [
    SpecialsS1Component,
    SpecialsS2Component,
    SpecialsFiltersComponent,
    SpecialsListComponent,
    SpecialsComponent
  ],
  imports: [
    CommonModule,
    SpecialsRoutingModule
  ]
})
export class SpecialsModule { }
