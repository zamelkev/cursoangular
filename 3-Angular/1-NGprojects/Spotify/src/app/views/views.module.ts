import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { MainComponentsModule } from '../main-components/main-components.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainGridComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MainComponentsModule
  ],
  exports: [
    HomeComponent,
    MainGridComponent
  ]
})
export class ViewsModule { }
