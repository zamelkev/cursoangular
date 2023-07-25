import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WorkingExperienceComponent } from './working-experience/working-experience.component';
import { WorkingExpDetailComponent } from './working-exp-detail/working-exp-detail.component';



@NgModule({
  declarations: [
    WorkingExperienceComponent,
    WorkingExpDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    WorkingExperienceComponent,
    WorkingExpDetailComponent
  ]
})
export class WorkingExperienciesModule { }
