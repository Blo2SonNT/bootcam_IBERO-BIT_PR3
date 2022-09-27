import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProductosComponent } from './formulario-productos.component';

describe('FormularioProductosComponent', () => {
  let component: FormularioProductosComponent;
  let fixture: ComponentFixture<FormularioProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
