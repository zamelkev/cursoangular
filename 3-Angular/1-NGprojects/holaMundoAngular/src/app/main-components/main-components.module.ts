import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainCardComponent } from './main-card/main-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, MainCardComponent]

})
export class MainComponentsModule { }
