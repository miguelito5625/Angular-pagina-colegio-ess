import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { SeleccionProfesorAlumnoComponent } from './seleccion-profesor-alumno/seleccion-profesor-alumno.component';
import { PrincipalindexComponent } from './principalindex/principalindex.component';


@NgModule({
  declarations: [
    SeleccionProfesorAlumnoComponent,
    PrincipalindexComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
