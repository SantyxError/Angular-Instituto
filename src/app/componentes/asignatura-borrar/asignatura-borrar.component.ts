import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Asignatura } from 'src/app/modelos/asignatura';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-asignatura-borrar',
  templateUrl: './asignatura-borrar.component.html',
  styleUrls: ['./asignatura-borrar.component.css'],
})
export class AsignaturaBorrarComponent {
  constructor(
    private asignaturaService: AsignaturasService,
    private root: ActivatedRoute,
    private ruta: Router
  ) {}

  titulo: string = 'ELIMINAR ASIGNATURA';
  id: number = this.root.snapshot.params['id'];
  asignatura!: Asignatura;

  ngOnInit() {
    this.asignatura = this.asignaturaService.getAsignatura(this.id);
  }

  eliminarAsignatura() {
    this.asignaturaService.eliminarAsignatura(this.id);
    this.volver();
  }

  volver() {
    this.ruta.navigate(['clases']);
  }
}
