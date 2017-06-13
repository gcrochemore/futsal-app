import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode, Input} from "@angular/core";
import {Router} from "@angular/router";
import {Headers, RequestOptions, Request, RequestMethod, Http, Response } from '@angular/http';
import {environment} from "../../../environments/environment";
import {Goal} from "../../entities/goal";

@Component({
    selector: 'goal',
    templateUrl: './goal.component.html',
    styleUrls: ['./goal.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class GoalComponent {

  @Input('goal') goal: Goal;

  constructor(private router: Router,
              private http: Http) {
    }
}
