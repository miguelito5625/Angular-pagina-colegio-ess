import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionProfesorAlumnoComponent } from './seleccion-profesor-alumno.component';

describe('SeleccionProfesorAlumnoComponent', () => {
  let component: SeleccionProfesorAlumnoComponent;
  let fixture: ComponentFixture<SeleccionProfesorAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionProfesorAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionProfesorAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
