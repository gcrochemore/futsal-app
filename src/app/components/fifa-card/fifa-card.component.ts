import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Headers, RequestOptions, Request, RequestMethod, Http, Response } from '@angular/http';
import {environment} from "../../../environments/environment";
import {User} from "../../entities/user";

@Component({
    selector: 'fifa-card',
    templateUrl: './fifa-card.component.html',
    styleUrls: ['./fifa-card.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class FifaCardComponent {

  @Input('player') player: User;

  constructor(private router: Router,
              private http: Http) {
    }
}
