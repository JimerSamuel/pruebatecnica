import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoEstudiantesComponent } from './components/ingreso-estudiantes/ingreso-estudiantes.component';
import { NotasEstudiantesComponent } from './components/notas-estudiantes/notas-estudiantes.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ingreso-estudiantes' },
  { path: 'ingreso-estudiantes', component: IngresoEstudiantesComponent },
  { path: 'notas-estudiantes', component: NotasEstudiantesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
