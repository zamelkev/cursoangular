import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistasModule } from './vistas/vistas.module';
import { HomeComponent } from './vistas/home/home.component';
import { Page1Component } from './vistas/page1/page1.component';
import { Page2Component } from './vistas/page2/page2.component';
import { Page3Component } from './vistas/page3/page3.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'page1', component: Page1Component},
  { path:'page2', component: Page2Component},
  { path:'page3', component: Page3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), VistasModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
