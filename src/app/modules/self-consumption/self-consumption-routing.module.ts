import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfConsumptionComponent } from './self-consumption.component';

export const selfConsumptionRoutes: Routes = [
  {
    path: '',
    component: SelfConsumptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(selfConsumptionRoutes)],
  exports: [RouterModule],
})
export class SelfConsumptionRoutingModule {}
