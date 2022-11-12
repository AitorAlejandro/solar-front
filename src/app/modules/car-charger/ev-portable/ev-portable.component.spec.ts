import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPortableComponent } from './ev-portable.component';

describe('EvPortableComponent', () => {
  let component: EvPortableComponent;
  let fixture: ComponentFixture<EvPortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvPortableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EvPortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
