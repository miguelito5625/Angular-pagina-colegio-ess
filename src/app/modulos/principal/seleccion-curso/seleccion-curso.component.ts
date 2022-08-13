import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  siguientePagina(curso: object): void {
    console.log(curso);
  }

}
