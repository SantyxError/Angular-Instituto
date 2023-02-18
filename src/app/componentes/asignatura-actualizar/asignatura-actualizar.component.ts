import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/modelos/asignatura';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-asignatura-actualizar',
  templateUrl: './asignatura-actualizar.component.html',
  styleUrls: ['./asignatura-actualizar.component.css'],
})
export class AsignaturaActualizarComponent {
  constructor(
    private asignaturaServicio: AsignaturasService,
    private root: ActivatedRoute,
    private router: Router
  ) {}

  titulo: string = 'ACTUALIZAR ASIGNATURA';
  asignatura!: Asignatura;
  id: number = this.root.snapshot.params['id'];

  ngOnInit() {
    this.asignatura = this.asignaturaServicio.getAsignatura(this.id);
  }

  actualizarAsignatura() {
    this.asignaturaServicio.modificarAsignatura(this.asignatura);
    this.router.navigate(['clases']);
  }
}
