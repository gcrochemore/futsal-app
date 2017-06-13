import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MatchComponent } from './pages/match/match.component';
import { UsersComponent } from './pages/users/users.component';

import { FifaCardComponent } from './components/fifa-card/fifa-card.component';
import { TeamComponent } from './components/team/team.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GoalComponent } from './components/goal/goal.component';

import {routing, appRoutingProviders} from "./app.routes";

import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,

    CalendarComponent,
    MatchComponent,
    UsersComponent,

    FifaCardComponent,
    TeamComponent,
    SpinnerComponent,
    GoalComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
