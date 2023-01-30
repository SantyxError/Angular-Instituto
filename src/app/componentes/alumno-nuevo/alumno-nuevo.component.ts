import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-alumno-nuevo',
  templateUrl: './alumno-nuevo.component.html',
  styleUrls: ['./alumno-nuevo.component.css'],
})
export class AlumnoNuevoComponent {
  constructor(
    private alumnosServicios: AlumnosService,
    private route: Router
  ) {}

  titulo: string = 'CREAR ALUMNO';

  id: number = this.alumnosServicios.getAlumnos().length + 1;
  nombre: string = '';
  apellido: string = '';
  curso: string = '';

  ngOnInit() {}

  nuevoAlumno() {
    let nuevoAlumno = {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      curso: this.curso,
    };
    this.alumnosServicios.nuevoAlumno(nuevoAlumno);

    this.volver();
  }

  volver() {
    this.route.navigate(['']);
  }
}
