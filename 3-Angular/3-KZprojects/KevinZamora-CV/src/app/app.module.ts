import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IntroduccionComponent } from './datosPersonales/introduccion/introduccion.component';
import { DatosComponent } from './datosPersonales/datos/datos.component';
import { VoluntariadoComponent } from './voluntariadoyAccionesSociales/voluntariado/voluntariado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterComponent,
    IntroduccionComponent,
    DatosComponent,
    VoluntariadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
