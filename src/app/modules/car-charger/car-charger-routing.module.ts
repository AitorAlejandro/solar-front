import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarChargerComponent } from './car-charger.component';
import { EvPortableComponent } from './ev-portable/ev-portable.component';
import { PoleComponent } from './pole/pole.component';
import { TrydanComponent } from './trydan/trydan.component';

export const carChargerRoutes: Routes = [
  {
    path: '',
    component: CarChargerComponent,
  },
  {
    path: 'trydan',
    component: TrydanComponent,
  },
  {
    path: 'pole',
    component: PoleComponent,
  },
  {
    path: 'ev-portable',
    component: EvPortableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(carChargerRoutes)],
  exports: [RouterModule],
})
export class CarChargerRoutingModule {}
