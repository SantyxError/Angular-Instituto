import { Injectable } from '@angular/core';
import { Asignatura } from '../modelos/asignatura';

@Injectable({
  providedIn: 'root',
})
export class AsignaturasService {
  asignaturas: Array<Asignatura> = [
    { id: 1, nombre: 'Base de Datos' },
    { id: 2, nombre: 'Programación' },
    { id: 3, nombre: 'Sistemas Informáticos' },
    { id: 4, nombre: 'Servidor' },
    { id: 5, nombre: 'Cliente' },
    { id: 6, nombre: 'Lenguaje de Marcas' },
  ];

  constructor() {}

  getAsignatura(id: number) {
    let pos = this.asignaturas.findIndex((a) => a.id == id);
    return this.asignaturas[pos];
  }

  getAsignaturas() {
    return this.asignaturas;
  }

  nuevaAsignatura(asignatura: Asignatura) {
    this.asignaturas.push(asignatura);
  }

  eliminarAsignatura(id: number) {
    let pos = this.asignaturas.findIndex((a) => a.id == id);
    this.asignaturas.splice(pos, 1);
  }

  modificarAsignatura(asignatura: Asignatura) {
    let pos = this.asignaturas.findIndex((a) => a.id == asignatura.id);
    this.asignaturas[pos].id;
    this.asignaturas[pos].nombre;
  }
}
