import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



@NgModule({
  declarations: [
    HeaderNavbarComponent,
    FooterComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainComponentsModule { }
