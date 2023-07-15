import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvNavbarComponent } from './cv-navbar/cv-navbar.component';



@NgModule({
  declarations: [
    CvNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CvNavbarComponent
  ]
})
export class MainComponentsModule { }
