import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-alumno-actualizar',
  templateUrl: './alumno-actualizar.component.html',
  styleUrls: ['./alumno-actualizar.component.css'],
})
export class AlumnoActualizarComponent {
  constructor(
    private alumnosService: AlumnosService,
    private root: ActivatedRoute,
    private router: Router
  ) {}

  titulo: string = 'ACTUALIZAR ALUMNO';
  alumno!: Alumno;
  id: number = this.root.snapshot.params['id'];

  ngOnInit() {
    this.alumno = this.alumnosService.getAlumno(this.id);
  }

  actualizarAlumno() {
    this.alumnosService.actualizaAlumno(this.alumno);
    this.router.navigate(['']);
  }
}
