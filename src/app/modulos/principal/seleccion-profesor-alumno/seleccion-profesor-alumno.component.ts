import { animation } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seleccion-profesor-alumno',
  templateUrl: './seleccion-profesor-alumno.component.html',
  styleUrls: ['./seleccion-profesor-alumno.component.css']
})
export class SeleccionProfesorAlumnoComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('opcionProfesor', {static: false}) opcionProfesor: ElementRef;
  @ViewChild('opcionAlumno', {static: false}) opcionAlumno: ElementRef;

  animacionesEntrada = [
    "animate__backInDown",
    "animate__backInLeft",
    "animate__backInRight",
    "animate__lightSpeedInRight",
    "animate__lightSpeedInLeft",
    "animate__rotateInDownLeft",
    "animate__rollIn"
  ]
  animacionEntrada: String = "";

  animationendListener;

  constructor(
    private renderer:Renderer2
  ) { 

    this.animacionEntrada = this.obtenerAnimacionEntrada();

  }

  ngOnInit(): void {
    // const animacion = this.obtenerAnimacionEntrada();
    // console.log(animacion);
    
  }

  obtenerAnimacionEntrada(): String {
    return this.animacionesEntrada[Math.floor(Math.random()*this.animacionesEntrada.length)];
  }

  ngAfterViewInit(): void {
    this.animationendListener = this.renderer.listen(this.opcionAlumno.nativeElement, 'animationend', (evt) => {
      console.log("TERMINO ANIMACION");
     });
  }

  ngOnDestroy(): void {
    this.animationendListener.unsubscribe();
  }
  

  public navegarSiguiente(opcion: String): void {
    console.log(opcion);
    if (opcion === "profesor") {
    this.renderer.removeClass(this.opcionAlumno.nativeElement, 'animate__zoomIn');
    this.renderer.addClass(this.opcionAlumno.nativeElement, 'animate__bounceOutLeft');
    } else {
    this.renderer.removeClass(this.opcionProfesor.nativeElement, 'animate__zoomIn');
    this.renderer.addClass(this.opcionProfesor.nativeElement, 'animate__bounceOutLeft');
    }
  }

}
