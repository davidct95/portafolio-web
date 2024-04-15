import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PrincipalComponent } from './pages/principal/principal.component';



@NgModule({
  declarations: [
    PresentacionComponent,
    ProyectosComponent,
    PrincipalComponent
  ],
  exports:[
    PrincipalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortafolioModule { }
