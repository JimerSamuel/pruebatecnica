import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoEstudiantesComponent } from './components/ingreso-estudiantes/ingreso-estudiantes.component';
import { NotasEstudiantesComponent } from './components/notas-estudiantes/notas-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoEstudiantesComponent,
    NotasEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
