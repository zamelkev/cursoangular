import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesFormComponent } from './coches-form/coches-form.component';
import { CochesListComponent } from './coches-list/coches-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesFormComponent,
    CochesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
