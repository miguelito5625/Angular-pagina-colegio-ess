import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionBimestreComponent } from './seleccion-bimestre.component';

describe('SeleccionBimestreComponent', () => {
  let component: SeleccionBimestreComponent;
  let fixture: ComponentFixture<SeleccionBimestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionBimestreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionBimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
