import { animation } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ENTRANCES_ANIMATIONS } from 'src/app/extra-data/entrances-animatios';
import { EXITS_ANIMATIONS } from 'src/app/extra-data/exits-animatios';

@Component({
  selector: 'app-seleccion-profesor-alumno',
  templateUrl: './seleccion-profesor-alumno.component.html',
  styleUrls: ['./seleccion-profesor-alumno.component.css']
})
export class SeleccionProfesorAlumnoComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('opcionProfesor', { static: false }) opcionProfesor: ElementRef;
  @ViewChild('opcionAlumno', { static: false }) opcionAlumno: ElementRef;

  animacionEntrada1: String = "";
  animacionEntrada2: String = "";

  animationendListenerProfesor;
  animationendListenerAlumno;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {

    this.animacionEntrada1 = this.obtenerAnimacionEntrada();
    this.animacionEntrada2 = this.obtenerAnimacionEntrada();

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    // this.animationendListenerProfesor.unsubscribe();
    // this.animationendListenerAlumno.unsubscribe();
  }

  obtenerAnimacionEntrada(): string {
    return ENTRANCES_ANIMATIONS[Math.floor(Math.random() * ENTRANCES_ANIMATIONS.length)];
  }

  obtenerAnimacionSalida(): string {
    return EXITS_ANIMATIONS[Math.floor(Math.random() * EXITS_ANIMATIONS.length)];
  }

  


  public navegarSiguiente(opcion: String): void {
    this.animationendListenerProfesor = this.renderer.listen(this.opcionProfesor.nativeElement, 'animationend', (evt) => {
      console.log("TERMINO ANIMACION");
      this.router.navigate(["/principal/selecciongrado"]);
    });

    this.animationendListenerAlumno = this.renderer.listen(this.opcionAlumno.nativeElement, 'animationend', (evt) => {
      console.log("TERMINO ANIMACION");
      this.router.navigate(["/principal/selecciongrado"]);
    });

    if (opcion === "profesor") {
      const className = this.opcionAlumno.nativeElement.className.split(' ')[1];
      this.renderer.removeClass(this.opcionAlumno.nativeElement, className);
      this.renderer.addClass(this.opcionAlumno.nativeElement, this.obtenerAnimacionSalida());
    } else {
      const className = this.opcionProfesor.nativeElement.className.split(' ')[1];
      this.renderer.removeClass(this.opcionProfesor.nativeElement, className);
      this.renderer.addClass(this.opcionProfesor.nativeElement, this.obtenerAnimacionSalida());
    }
    
  }

}
