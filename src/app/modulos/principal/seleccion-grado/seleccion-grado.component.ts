import { Component, OnInit } from '@angular/core';
import { ENTRANCES_ANIMATIONS } from 'src/app/extra-data/entrances-animatios';

@Component({
  selector: 'app-seleccion-grado',
  templateUrl: './seleccion-grado.component.html',
  styleUrls: ['./seleccion-grado.component.css']
})
export class SeleccionGradoComponent implements OnInit {

  grados:any[] = [
    {
      id: 1,
      nombre: "Primero Básico"
    },
    {
      id: 2,
      nombre: "Segundo Básico"
    },
    {
      id: 1,
      nombre: "Tercero Básico"
    },
    
  ];

  
  constructor() { 

    for(let i = 0; i < this.grados.length; i++) {
      this.grados[i].animacionEntrada = this.obtenerAnimacionEntrada();
      console.log(this.grados[i]);
    }

  }

  ngOnInit(): void {
  }

  obtenerAnimacionEntrada(): string {
    return ENTRANCES_ANIMATIONS[Math.floor(Math.random() * ENTRANCES_ANIMATIONS.length)];
  }

  siguientePagina(grado: object): void {
    console.log(grado);
  }

}
