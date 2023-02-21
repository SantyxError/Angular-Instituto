import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AlumnoInfoComponent } from './componentes/alumno-info/alumno-info.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { AlumnoBorrarComponent } from './componentes/alumno-borrar/alumno-borrar.component';
import { AlumnoActualizarComponent } from './componentes/alumno-actualizar/alumno-actualizar.component';
import { AlumnoNuevoComponent } from './componentes/alumno-nuevo/alumno-nuevo.component';
import { FormsModule } from '@angular/forms';
import { ProfesorActualizarComponent } from './componentes/profesor-actualizar/profesor-actualizar.component';
import { ProfesorBorrarComponent } from './componentes/profesor-borrar/profesor-borrar.component';
import { ProfesorInfoComponent } from './componentes/profesor-info/profesor-info.component';
import { ProfesorNuevoComponent } from './componentes/profesor-nuevo/profesor-nuevo.component';
import { AsignaturaNuevoComponent } from './componentes/asignatura-nuevo/asignatura-nuevo.component';
import { AsignaturaBorrarComponent } from './componentes/asignatura-borrar/asignatura-borrar.component';
import { AsignaturaActualizarComponent } from './componentes/asignatura-actualizar/asignatura-actualizar.component';
import { AsignaturaInfoComponent } from './componentes/asignatura-info/asignatura-info.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlumnoInfoComponent,
    ProfesoresComponent,
    ClasesComponent,
    AlumnoBorrarComponent,
    AlumnoActualizarComponent,
    AlumnoNuevoComponent,
    ProfesorActualizarComponent,
    ProfesorBorrarComponent,
    ProfesorInfoComponent,
    ProfesorNuevoComponent,
    AsignaturaNuevoComponent,
    AsignaturaBorrarComponent,
    AsignaturaActualizarComponent,
    AsignaturaInfoComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
