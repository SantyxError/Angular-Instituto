import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //Creamos el usuario con el login y el password que queramos
  usuario: Usuario = { login: '', password: '' };

  constructor(private servicioAlumno: AlumnosService) {}

  //Establecemos el login
  botonLogin() {
    this.servicioAlumno.setLogin(this.usuario);
  }
}
