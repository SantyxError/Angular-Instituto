import { Component } from '@angular/core';
import { Asignatura } from 'src/app/modelos/asignatura';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent {
  constructor(private asignaturaService: AsignaturasService) {}

  titulo: string = 'LISTADO DE ASIGNATURAS';
  asignaturas: Array<Asignatura> = this.asignaturaService.asignaturas;

  ngOnInit() {
    this.asignaturas;
  }
}
