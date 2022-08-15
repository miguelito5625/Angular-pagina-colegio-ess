import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { SeleccionProfesorAlumnoComponent } from './seleccion-profesor-alumno/seleccion-profesor-alumno.component';
import { PrincipalindexComponent } from './principalindex/principalindex.component';
import { NavbarmodprincipalComponent } from './navbarmodprincipal/navbarmodprincipal.component';
import { SeleccionGradoComponent } from './seleccion-grado/seleccion-grado.component';
import { SeleccionCursoComponent } from './seleccion-curso/seleccion-curso.component';
import { SeleccionBimestreComponent } from './seleccion-bimestre/seleccion-bimestre.component';


@NgModule({
  declarations: [
    SeleccionProfesorAlumnoComponent,
    PrincipalindexComponent,
    NavbarmodprincipalComponent,
    SeleccionGradoComponent,
    SeleccionCursoComponent,
    SeleccionBimestreComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
