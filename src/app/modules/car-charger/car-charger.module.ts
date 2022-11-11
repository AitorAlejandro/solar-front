import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrydanComponent } from './trydan/trydan.component';
import { CarChargerComponent } from './car-charger.component';
import { PoleComponent } from './pole/pole.component';
import { CarChargerRoutingModule } from './car-charger-routing.module';
import { EvPortableComponent } from './ev-portable/ev-portable.component';

@NgModule({
  declarations: [
    CarChargerComponent,
    TrydanComponent,
    PoleComponent,
    EvPortableComponent,
  ],
  imports: [CommonModule, CarChargerRoutingModule],
})
export class CarChargerModule {}
