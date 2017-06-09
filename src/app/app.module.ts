import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MatchComponent } from './pages/match/match.component';
import { UsersComponent } from './pages/users/users.component';

import {routing, appRoutingProviders} from "./app.routes";

import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,

    CalendarComponent,
    MatchComponent,
    UsersComponent
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
