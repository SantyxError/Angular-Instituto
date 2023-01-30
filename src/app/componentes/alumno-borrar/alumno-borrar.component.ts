import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-alumno-borrar',
  templateUrl: './alumno-borrar.component.html',
  styleUrls: ['./alumno-borrar.component.css'],
})
export class AlumnoBorrarComponent {
  titulo: string = 'BORRAR ALUMNO';

  id: number = 0;

  constructor(
    private alumnosServicio: AlumnosService,
    private root: ActivatedRoute
  ) {}

  eliminarAlumno() {
    this.id = this.root.snapshot.params['id'];
    this.alumnosServicio.eliminaAlumno(this.id);
  }
}
