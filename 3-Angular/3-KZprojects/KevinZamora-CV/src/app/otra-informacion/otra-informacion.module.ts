import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { IDEsComponent } from './ides/ides.component';
import { OtrosConocimientosComponent } from './otros-conocimientos/otros-conocimientos.component';



@NgModule({
  declarations: [
    TecnologiasComponent,
    HerramientasComponent,
    IDEsComponent,
    OtrosConocimientosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OtraInformacionModule { }
