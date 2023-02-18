import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-profesor-borrar',
  templateUrl: './profesor-borrar.component.html',
  styleUrls: ['./profesor-borrar.component.css'],
})
export class ProfesorBorrarComponent {
  constructor(
    private profersorService: ProfesorService,
    private root: ActivatedRoute
  ) {}

  titulo: string = 'ELIMINAR PROFESOR';
  id: number = this.root.snapshot.params['id'];
  profesor!: Profesor;

  ngOnInit() {
    this.profesor = this.profersorService.getProfesor(this.id);
  }

  eliminarProfesor() {
    this.profersorService.eliminarProfesor(this.id);
  }
}
