import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrydanComponent } from './trydan.component';

describe('TrydanComponent', () => {
  let component: TrydanComponent;
  let fixture: ComponentFixture<TrydanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrydanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrydanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
