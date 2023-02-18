import { Component } from '@angular/core';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
import { Asignatura } from 'src/app/modelos/asignatura';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignatura-info',
  templateUrl: './asignatura-info.component.html',
  styleUrls: ['./asignatura-info.component.css'],
})
export class AsignaturaInfoComponent {
  constructor(
    private asignaturaService: AsignaturasService,
    private root: ActivatedRoute
  ) {}

  titulo: string = 'INFORMACIÓN DE LA ASIGNATURA';
  asignatura!: Asignatura;
  id: number = this.root.snapshot.params['id'];
  ngOnInit() {
    this.asignatura = this.asignaturaService.getAsignatura(this.id);
  }
}
