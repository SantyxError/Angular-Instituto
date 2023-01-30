import { Component } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  titulo: string = 'LISTADO DE ALUMNOS';

  constructor(private alumnosServicio: AlumnosService) {}

  alumnos: Array<Alumno> = this.alumnosServicio.alumnos;

  ngOnInit() {
    this.alumnosServicio.alumnos;
  }
}
