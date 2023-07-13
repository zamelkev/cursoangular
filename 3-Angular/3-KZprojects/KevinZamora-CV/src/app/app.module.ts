import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatosPersonalesModule } from './datos-personales/datos-personales.module';
import { ExperienciasEducativasModule } from './experiencias-educativas/experiencias-educativas.module';
import { ExperienciasLaboralesModule } from './experiencias-laborales/experiencias-laborales.module';
import { MainComponentsModule } from './main-components/main-components.module';
import { OtraInformacionModule } from './otra-informacion/otra-informacion.module';
import { ViewsModule } from './views/views.module';
import { VoluntariadoyAccionesSocialesModule } from './voluntariadoy-acciones-sociales/voluntariadoy-acciones-sociales.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainComponentsModule,
    DatosPersonalesModule,
    ExperienciasEducativasModule,
    ExperienciasLaboralesModule,
    OtraInformacionModule,
    ViewsModule,
    VoluntariadoyAccionesSocialesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
