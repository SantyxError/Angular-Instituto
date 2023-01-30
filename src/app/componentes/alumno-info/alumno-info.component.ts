import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-alumno-info',
  templateUrl: './alumno-info.component.html',
  styleUrls: ['./alumno-info.component.css'],
})
export class AlumnoInfoComponent {
  constructor(
    private alumnoInfoService: AlumnosService,
    // private router: Route,
    private root: ActivatedRoute
  ) {}

  titulo: string = 'INFORMACIÓN DEL ALUMNO';
  id: number = 0;
  nombre: string | undefined;
  apellido: string | undefined;
  curso: string | undefined;

  ngOnInit() {
    this.id = this.root.snapshot.params['id'];
    let alumnoNuevo: Alumno | undefined = this.alumnoInfoService.getAlumno(
      this.id
    );

    console.log(alumnoNuevo?.nombre);

    this.nombre = alumnoNuevo ? alumnoNuevo.nombre : undefined;
    this.apellido = alumnoNuevo ? alumnoNuevo.apellido : undefined;
    this.curso = alumnoNuevo ? alumnoNuevo.curso : undefined;
    console.log(this.nombre);
  }
}
