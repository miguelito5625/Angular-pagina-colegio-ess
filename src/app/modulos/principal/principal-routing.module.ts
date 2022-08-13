import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalindexComponent } from './principalindex/principalindex.component';
import { SeleccionCursoComponent } from './seleccion-curso/seleccion-curso.component';
import { SeleccionGradoComponent } from './seleccion-grado/seleccion-grado.component';
import { SeleccionProfesorAlumnoComponent } from './seleccion-profesor-alumno/seleccion-profesor-alumno.component';

const routes: Routes = [

  {
    path: '',
    component: PrincipalindexComponent,
    children: [
      { path: 'seleccionprofeoalumno', component: SeleccionProfesorAlumnoComponent },
      { path: 'selecciongrado', component: SeleccionGradoComponent },
      { path: 'seleccioncurso', component: SeleccionCursoComponent },
      {
        path: '',
        redirectTo: 'seleccionprofeoalumno',
        pathMatch: 'full'
      }
    ]
  },

  // { path: '', redirectTo: 'seleccionprofeoalumno', pathMatch: 'full' },
  // { path: '**', redirectTo: 'seleccionprofeoalumno' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
