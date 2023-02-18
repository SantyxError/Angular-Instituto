import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Guarda1Guard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //Si es false, no podremos acceder
    let acceso = false;

    //Preguntamos si el usuario quiere accceder
    if (window.confirm('Quieres acceder a las asignaturas?')) {
      acceso = true; //si quiere acceder, cambiamos a true
    } else {
      this.router.navigate(['']); //si no quiere acceder, redireccionamos a home
    }
    return acceso;
  }
}
