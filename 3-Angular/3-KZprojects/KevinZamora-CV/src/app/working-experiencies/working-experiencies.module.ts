import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WorkingExperienceComponent } from './working-experience/working-experience.component';



@NgModule({
  declarations: [
    WorkingExperienceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    WorkingExperienceComponent
  ]
})
export class WorkingExperienciesModule { }
