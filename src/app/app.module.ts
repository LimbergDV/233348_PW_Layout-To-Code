import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatsViewComponent } from './stats-view/stats-view.component';
import { BarStatsPlayersComponent } from './bar-stats-players/bar-stats-players.component';
import { FootballPlayersViewComponent } from './football-players-view/football-players-view.component';
import { CardsComponent } from './cards/cards.component';
import { GamesViewComponent } from './games-view/games-view.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    NavBarComponent,
    StatsViewComponent,
    BarStatsPlayersComponent,
    FootballPlayersViewComponent,
    CardsComponent,
    GamesViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
