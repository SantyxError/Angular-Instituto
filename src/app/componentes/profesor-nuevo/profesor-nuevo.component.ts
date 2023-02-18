import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-profesor-nuevo',
  templateUrl: './profesor-nuevo.component.html',
  styleUrls: ['./profesor-nuevo.component.css'],
})
export class ProfesorNuevoComponent {
  constructor(
    private profesorService: ProfesorService,
    private router: Router
  ) {}

  titulo: string = 'CREAR NUEVO PROFESOR';
  id: number = this.profesorService.profesores.length + 1;
  nombre: string = '';
  apellido: string = '';
  asignatura: string = '';

  ngOnInit() {}

  nuevoProfesor() {
    let nuevoProfesor = {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      asignatura: this.asignatura,
    };
    this.profesorService.nuevoProfesor(nuevoProfesor);
    return this.volver();
  }

  volver() {
    this.router.navigate(['profesores']);
  }
}
