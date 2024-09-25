import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { StatsViewComponent } from './stats-view/stats-view.component';
import { FootballPlayersViewComponent } from './football-players-view/football-players-view.component';
import { GamesViewComponent } from './games-view/games-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: PrincipalViewComponent },
  { path: 'Estadisticas', component:  StatsViewComponent},
  { path: 'Futbolistas', component: FootballPlayersViewComponent },
  { path: 'Partidos', component: GamesViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
