import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUpComponent } from './header-up/header-up.component';
import { LogotipoComponent } from './logotipo/logotipo.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IdiomaComponent } from './idioma/idioma.component';
import { CuentaYListaComponent } from './cuenta-ylista/cuenta-ylista.component';
import { DevolucionesComponent } from './devoluciones/devoluciones.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HeaderDownComponent } from './header-down/header-down.component';
import { NavComponent } from './nav/nav.component';
import { EnlaceComponent } from './enlace/enlace.component';



@NgModule({
  declarations: [
    HeaderUpComponent,
    LogotipoComponent,
    UbicacionComponent,
    SearchBarComponent,
    IdiomaComponent,
    CuentaYListaComponent,
    DevolucionesComponent,
    CarritoComponent,
    HeaderDownComponent,
    NavComponent,
    EnlaceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderUpComponent,
    LogotipoComponent,
    UbicacionComponent,
    SearchBarComponent,
    IdiomaComponent,
    CuentaYListaComponent,
    DevolucionesComponent,
    CarritoComponent,
    HeaderDownComponent,
    NavComponent,
    EnlaceComponent
  ]
})
export class HeaderModule { }
