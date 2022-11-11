import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'self-consumption',
    loadChildren: () =>
      import('./modules/self-consumption/self-consumption.module').then(
        m => m.SelfConsumptionModule
      ),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./modules/calculator/calculator.module').then(
        m => m.CalculatorModule
      ),
  },
  {
    path: 'car-charger',
    loadChildren: () =>
      import('./modules/car-charger/car-charger.module').then(
        m => m.CarChargerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
