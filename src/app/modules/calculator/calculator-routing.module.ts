import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator.component';

export const calculatorRoutes: Routes = [
  {
    path: '',
    component: CalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(calculatorRoutes)],
  exports: [RouterModule],
})
export class CalculatorRoutingModule {}
