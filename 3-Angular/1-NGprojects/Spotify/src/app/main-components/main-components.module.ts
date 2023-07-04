import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { MinPlayerComponent } from './min-player/min-player.component';



@NgModule({
  declarations: [
    PlayerComponent,
    MinPlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainComponentsModule { }
