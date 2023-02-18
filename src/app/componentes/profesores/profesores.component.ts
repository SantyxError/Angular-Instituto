import { Component } from '@angular/core';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent {
  titulo: string = 'LISTADO DE PROFESORES';

  constructor(private profesoresSerivicio: ProfesorService) {}

  profesores: Array<Profesor> = this.profesoresSerivicio.profesores;

  ngOnInit() {
    this.profesores;
  }
}
