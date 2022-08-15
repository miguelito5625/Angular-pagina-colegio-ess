import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-bimestre',
  templateUrl: './seleccion-bimestre.component.html',
  styleUrls: ['./seleccion-bimestre.component.css']
})
export class SeleccionBimestreComponent implements OnInit {

  bimestres: any[] = [
    {
      id: 1,
      nombre: 'Bimestre 1'
    },
    {
      id: 2,
      nombre: 'Bimestre 2'
    },
    {
      id: 3,
      nombre: 'Bimestre 3'
    },
    {
      id: 4,
      nombre: 'Bimestre 4'
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  siguientePagina(bimestre: object): void {
    console.log(bimestre);
    
  }

}
