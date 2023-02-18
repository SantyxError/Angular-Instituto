import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-profesor-info',
  templateUrl: './profesor-info.component.html',
  styleUrls: ['./profesor-info.component.css'],
})
export class ProfesorInfoComponent {
  //Importamos:
  // - Servicio del profesor
  // - El ActivateRoute para trastear con la id
  constructor(
    private profesorService: ProfesorService,
    private root: ActivatedRoute
  ) {}

  titulo: string = 'INFORMACIÓN DEL PROFESOR';

  //Creamos una clase profesor.
  profesor!: Profesor;

  //Al cargar la pagina, capturamos la id y se la pasamos al metodo de getProfesor()
  ngOnInit() {
    let id = this.root.snapshot.params['id'];
    this.profesor = this.profesorService.getProfesor(id);
  }
}
