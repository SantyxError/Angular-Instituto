import { Injectable } from '@angular/core';
import { Alumno } from '../modelos/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  alumnos: Array<Alumno> = [
    { id: 1, nombre: 'Jose', apellido: 'Fernández', curso: '1ºDAW' },
    { id: 2, nombre: 'Ana', apellido: 'Larrañaga', curso: '1ºDAW' },
    { id: 3, nombre: 'Matilda', apellido: 'Arnau', curso: '2ºDAW' },
    { id: 4, nombre: 'Pablo', apellido: 'Benitez', curso: '2ºDAW' },
    { id: 5, nombre: 'Andrés', apellido: 'Gascón', curso: '2ºDAW' },
  ];

  constructor() {}

  getAlumno(id: number) {
    let pos = this.alumnos.findIndex((a) => a.id == id); //Buscamos la posicion del alumno
    return this.alumnos[pos]; //devolvemos el alumno encontrado en esa posicion
  }

  getAlumnos() {
    return this.alumnos;
  }

  nuevoAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  actualizaAlumno(alumno: Alumno) {
    let pos = this.alumnos.findIndex((a) => a.id == alumno.id); //Buscamos la posicion del alumno

    //En la posicion del alumno encontrado, sobreescribimos con los datos que sacamos de la clase "Alumno"
    this.alumnos[pos].nombre = alumno.nombre;
    this.alumnos[pos].apellido = alumno.apellido;
    this.alumnos[pos].curso = alumno.curso;
  }

  eliminaAlumno(id: number) {
    let pos = this.alumnos.findIndex((a) => a.id == id);
    this.alumnos.splice(pos, 1);
  }
}
