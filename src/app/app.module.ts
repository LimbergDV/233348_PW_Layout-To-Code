import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatsViewComponent } from './stats-view/stats-view.component';
import { BarStatsPlayersComponent } from './bar-stats-players/bar-stats-players.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    NavBarComponent,
    StatsViewComponent,
    BarStatsPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
