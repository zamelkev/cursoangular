import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { PlayerComponent } from './main-components/player/player.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'detalle', component: DetailComponent },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'reproductor', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
