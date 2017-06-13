import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Headers, RequestOptions, Request, RequestMethod, Http, Response } from '@angular/http';
import {environment} from "../../../environments/environment";
import {User} from "../../entities/user";
import {Team} from "../../entities/team";

@Component({
    selector: 'team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class TeamComponent {

  @Input('players') players: User[];

  @Input('team') team: Team;

  constructor(private router: Router,
              private http: Http) {
    }
}
