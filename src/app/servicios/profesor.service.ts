import { Injectable } from '@angular/core';
import { Profesor } from '../modelos/profesor';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  profesores: Array<Profesor> = [
    {
      id: 1,
      nombre: 'Pedro',
      apellido: 'Rodriguez',
      asignatura: 'Base de Datos',
    },
    { id: 2, nombre: 'Maria', apellido: 'Pascual', asignatura: 'Programación' },
    { id: 3, nombre: 'Vicente', apellido: 'Nuñez', asignatura: 'Cliente' },
    { id: 4, nombre: 'Jorge', apellido: 'Robles', asignatura: 'Servidor' },
    {
      id: 5,
      nombre: 'Lorenzo',
      apellido: 'Gallego',
      asignatura: 'Lenguage de Marcas',
    },
  ];

  constructor() {}

  getProfesor(id: number) {
    let pos = this.profesores.findIndex((p) => p.id == id);
    return this.profesores[pos];
  }

  getProfesores() {
    return this.profesores;
  }

  nuevoProfesor(profesor: Profesor) {
    this.profesores.push(profesor);
  }

  actualizarProfesor(profesor: Profesor) {
    let pos = this.profesores.findIndex((p) => p.id == profesor.id);

    this.profesores[pos].id = profesor.id;
    this.profesores[pos].nombre = profesor.nombre;
    this.profesores[pos].apellido = profesor.apellido;
    this.profesores[pos].asignatura = profesor.asignatura;
  }
  eliminarProfesor(id: number) {
    let pos = this.profesores.findIndex((p) => p.id == id);
    this.profesores.splice(pos, 1);
  }
}
