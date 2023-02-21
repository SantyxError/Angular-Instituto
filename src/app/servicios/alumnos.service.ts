import { Injectable } from '@angular/core';
import { Alumno } from '../modelos/alumno';
import { Usuario } from '../modelos/usuario';

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

  //este login es un numero, entra o no entra.
  private login: number = 0;

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

  //Devuelve el login
  getLogin() {
    return this.login;
  }

  //Establecemos el login, al cual le pasamos un usuario
  setLogin(usuario: Usuario) {
    console.log(usuario.password);
    //si NO coinciden con el usuario, no entra
    if (usuario.password != '' && usuario.login != '') {
      this.login = 1; //no entra
    } else {
      this.login = 0; //entra
    }
  }
}
