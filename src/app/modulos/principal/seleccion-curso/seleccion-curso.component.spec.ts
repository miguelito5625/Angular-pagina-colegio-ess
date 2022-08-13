import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCursoComponent } from './seleccion-curso.component';

describe('SeleccionCursoComponent', () => {
  let component: SeleccionCursoComponent;
  let fixture: ComponentFixture<SeleccionCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
