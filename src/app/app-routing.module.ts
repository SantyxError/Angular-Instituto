import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoActualizarComponent } from './componentes/alumno-actualizar/alumno-actualizar.component';
import { AlumnoBorrarComponent } from './componentes/alumno-borrar/alumno-borrar.component';
import { AlumnoInfoComponent } from './componentes/alumno-info/alumno-info.component';
import { AlumnoNuevoComponent } from './componentes/alumno-nuevo/alumno-nuevo.component';
import { AsignaturaActualizarComponent } from './componentes/asignatura-actualizar/asignatura-actualizar.component';
import { AsignaturaBorrarComponent } from './componentes/asignatura-borrar/asignatura-borrar.component';
import { AsignaturaInfoComponent } from './componentes/asignatura-info/asignatura-info.component';
import { AsignaturaNuevoComponent } from './componentes/asignatura-nuevo/asignatura-nuevo.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProfesorActualizarComponent } from './componentes/profesor-actualizar/profesor-actualizar.component';
import { ProfesorBorrarComponent } from './componentes/profesor-borrar/profesor-borrar.component';
import { ProfesorInfoComponent } from './componentes/profesor-info/profesor-info.component';
import { ProfesorNuevoComponent } from './componentes/profesor-nuevo/profesor-nuevo.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { Guarda1Guard } from './Guards/guarda1.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'profesores/info/:id', component: ProfesorInfoComponent },
  { path: 'profesores/eliminar/:id', component: ProfesorBorrarComponent },
  { path: 'profesores/actualizar/:id', component: ProfesorActualizarComponent },
  { path: 'profesores/nuevo', component: ProfesorNuevoComponent },
  { path: 'clases', canActivate: [Guarda1Guard], component: ClasesComponent },
  { path: 'clases/nuevo', component: AsignaturaNuevoComponent },
  { path: 'clases/info/:id', component: AsignaturaInfoComponent },
  { path: 'clases/eliminar/:id', component: AsignaturaBorrarComponent },
  { path: 'clases/actualizar/:id', component: AsignaturaActualizarComponent },
  { path: 'alumnos/info/:id', component: AlumnoInfoComponent },
  { path: 'alumnos/eliminar/:id', component: AlumnoBorrarComponent },
  { path: 'alumnos/actualizar/:id', component: AlumnoActualizarComponent },
  { path: 'alumnos/nuevo', component: AlumnoNuevoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
