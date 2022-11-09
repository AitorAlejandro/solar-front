import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfConsumptionComponent } from './self-consumption.component';
import { SelfConsumptionRoutingModule } from './self-consumption-routing.module';

@NgModule({
  declarations: [SelfConsumptionComponent],
  imports: [CommonModule, SelfConsumptionRoutingModule],
})
export class SelfConsumptionModule {}
