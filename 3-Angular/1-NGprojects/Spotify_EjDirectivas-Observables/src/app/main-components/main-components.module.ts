import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { PlayerComponent } from './player/player.component';
import { MinPlayerComponent } from './min-player/min-player.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CategoriesGridComponent } from './categories-grid/categories-grid.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



@NgModule({
  declarations: [
    PlayerComponent,
    MinPlayerComponent,
    ProductComponent,
    CategoryComponent,
    NavbarComponent,
    SidenavComponent,
    CategoriesGridComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [
    PlayerComponent,
    MinPlayerComponent,
    ProductComponent,
    CategoryComponent,
    NavbarComponent,
    SidenavComponent,
    CategoriesGridComponent,
    MainMenuComponent
  ]
})
export class MainComponentsModule { }
