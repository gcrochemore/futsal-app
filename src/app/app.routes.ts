import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MatchComponent } from './pages/match/match.component';
import { UsersComponent } from './pages/users/users.component';

const appRoutes: Routes = [
    {path: '', component: CalendarComponent},
    {path: 'match/:idMatch', component: MatchComponent},
    {path: 'users', component: UsersComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);