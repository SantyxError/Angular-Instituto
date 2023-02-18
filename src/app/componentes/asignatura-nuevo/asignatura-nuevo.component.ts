import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/modelos/asignatura';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-asignatura-nuevo',
  templateUrl: './asignatura-nuevo.component.html',
  styleUrls: ['./asignatura-nuevo.component.css'],
})
export class AsignaturaNuevoComponent {
  constructor(
    private asignaturaService: AsignaturasService,
    private root: Router
  ) {}

  titulo: string = 'CREAR NUEVO ALUMNO';
  id: number = this.asignaturaService.asignaturas.length + 1;
  nombre: string = '';

  ngOnInit() {}

  nuevaAsignatura() {
    let nuevaAsignatura = { id: this.id, nombre: this.nombre };
    this.asignaturaService.nuevaAsignatura(nuevaAsignatura);

    this.volver();
  }

  volver() {
    this.root.navigate(['clases']);
  }
}
