import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoActualizarComponent } from './componentes/alumno-actualizar/alumno-actualizar.component';
import { AlumnoBorrarComponent } from './componentes/alumno-borrar/alumno-borrar.component';
import { AlumnoInfoComponent } from './componentes/alumno-info/alumno-info.component';
import { AlumnoNuevoComponent } from './componentes/alumno-nuevo/alumno-nuevo.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'clases', component: ClasesComponent },
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
