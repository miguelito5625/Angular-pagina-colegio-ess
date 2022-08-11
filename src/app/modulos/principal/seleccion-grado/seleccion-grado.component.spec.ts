import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionGradoComponent } from './seleccion-grado.component';

describe('SeleccionGradoComponent', () => {
  let component: SeleccionGradoComponent;
  let fixture: ComponentFixture<SeleccionGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionGradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
