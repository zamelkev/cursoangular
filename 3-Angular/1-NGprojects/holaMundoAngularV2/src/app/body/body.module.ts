import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';



@NgModule({
  declarations: [
    TarjetaComponent,
    CuerpoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    TarjetaComponent,
    CuerpoComponent
  ]
})
export class BodyModule { }
