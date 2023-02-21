import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import { AlumnosService } from '../servicios/alumnos.service';

@Injectable({
  providedIn: 'root',
})
export class Guarda2Guard implements CanActivate {
  //Creamos un usuario
  usuario!: Usuario;
  constructor(private servicioAlumno: AlumnosService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //Si el login es 0, es que puede entrar, si fuese 1, no entraría
    if (this.servicioAlumno.getLogin() != 0) {
      alert('Entrando');
      return true;
    } else {
      alert('No se puede entrar');
      return false;
    }
  }
}
