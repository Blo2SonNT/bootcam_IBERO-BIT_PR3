import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoComponent } from './ingreso.component';

describe('IngresoComponent', () => {
  let component: IngresoComponent;
  let fixture: ComponentFixture<IngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
