import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    PiePaginaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    PiePaginaComponent
  ]
})
export class FooterModule { }
