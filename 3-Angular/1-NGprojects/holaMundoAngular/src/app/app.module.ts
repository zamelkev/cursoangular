import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { VistaAboutComponent } from './about/vista-about/vista-about.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    VistaAboutComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
