import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/modelos/profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';

@Component({
  selector: 'app-profesor-actualizar',
  templateUrl: './profesor-actualizar.component.html',
  styleUrls: ['./profesor-actualizar.component.css'],
})
export class ProfesorActualizarComponent {
  constructor(
    private profesorService: ProfesorService,
    private root: ActivatedRoute,
    private router: Router
  ) {}

  titulo: string = 'ACTUALIZAR PROFESOR';
  profesor!: Profesor;
  id: number = this.root.snapshot.params['id'];

  ngOnInit() {
    this.profesor = this.profesorService.getProfesor(this.id);
  }

  actualizarProfesor() {
    this.profesorService.actualizarProfesor(this.profesor);
    this.router.navigate(['/profesores/']);
  }
}
