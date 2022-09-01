import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ENTRANCES_ANIMATIONS } from 'src/app/extra-data/entrances-animatios';
import { GradosService } from 'src/app/servicios/grados.service';

@Component({
  selector: 'app-seleccion-grado',
  templateUrl: './seleccion-grado.component.html',
  styleUrls: ['./seleccion-grado.component.css']
})
export class SeleccionGradoComponent implements OnInit, OnDestroy {

  subcribcionObtenerGrados;

  grados:any[] = [];

  
  constructor(
    private router: Router,
    private servicioGrados: GradosService
  ) { 

    this.cargarGrados();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcribcionObtenerGrados.unsubscribe();
  }

  cargarGrados(): void {
    this.subcribcionObtenerGrados = this.servicioGrados.obtenerGrados().subscribe(
      res => {
        this.grados = res.grados;
        for(let i = 0; i < this.grados.length; i++) {
          this.grados[i].animacionEntrada = this.obtenerAnimacionEntrada();
        }
        console.log(this.grados);
      },
      err => {
        console.log(err);
      }
    );
  }

  obtenerAnimacionEntrada(): string {
    return ENTRANCES_ANIMATIONS[Math.floor(Math.random() * ENTRANCES_ANIMATIONS.length)];
  }

  siguientePagina(grado: object): void {
    console.log(grado);
    this.router.navigate(['/principal/seleccioncurso']);
  }

}
