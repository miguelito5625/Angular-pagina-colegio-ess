import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-curso',
  templateUrl: './seleccion-curso.component.html',
  styleUrls: ['./seleccion-curso.component.css']
})
export class SeleccionCursoComponent implements OnInit {

  cursos: any[] = [
    {
      id: 1,
      nombre: "Tecnología"
    },
    {
      id: 2,
      nombre: "Lengua"
    },
    {
      id: 3,
      nombre: "Matematica"
    },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  siguientePagina(curso: object): void {
    console.log(curso);
    this.router.navigate(['/principal/seleccionbimestre']);
  }

}
