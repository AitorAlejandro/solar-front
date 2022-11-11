import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarChargerComponent } from './car-charger.component';

describe('HomeComponent', () => {
  let component: CarChargerComponent;
  let fixture: ComponentFixture<CarChargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarChargerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarChargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
