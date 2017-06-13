import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Headers, RequestOptions, Request, RequestMethod, Http, Response } from '@angular/http';
import {FutsalGame} from "../../entities/futsal-game";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MatchComponent {
  public isRequesting: boolean;

  idMatch: number;
  match: FutsalGame;

  constructor(private route: ActivatedRoute,
              private http: Http){

  }
    
  ngOnInit() {
    this.isRequesting = true;
    this.route.params
      .subscribe(params => {
        this.idMatch = Number(params['idMatch']);
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        let options = new RequestOptions({ headers: headers });

        this.http.get(environment.api + `futsal_games/` + this.idMatch + `.json`, options)
          .subscribe(data => {
            this.match = new FutsalGame().deserialize(data.json());
            this.isRequesting = false;
          });
      });
  }

}