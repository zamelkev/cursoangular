import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { DatosComponent } from './datos/datos.component';



@NgModule({
  declarations: [
    IntroduccionComponent,
    DatosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroduccionComponent,
    DatosComponent
  ]
})
export class DatosPersonalesModule { }
