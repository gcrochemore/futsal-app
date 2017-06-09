import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode} from "@angular/core";
import {Router} from "@angular/router";
import {Headers, RequestOptions, Request, RequestMethod, Http, Response } from '@angular/http';
import {FutsalGame} from "../../entities/futsal-game";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class CalendarComponent {
    matchs: FutsalGame[] = [];

  constructor(private router: Router,
              private http: Http) {
    }

    ngOnInit(){
      console.log('init ');
      let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
      let options = new RequestOptions({ headers: headers });

      this.http.get(environment.api + `futsal_games.json`, options)
        .subscribe(data => this.matchs = FutsalGame.deserializeArray(data.json()));
    }

    goTo(idMatch){
      this.router.navigate(['match/' + idMatch ]);
    }

}