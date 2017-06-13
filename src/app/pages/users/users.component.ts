import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode} from "@angular/core";
import {Router} from "@angular/router";
import {Headers, RequestOptions, Request, RequestMethod, Http, Response } from '@angular/http';
import {environment} from "../../../environments/environment";
import {User} from "../../entities/user";

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class UsersComponent {
  public isRequesting: boolean;

  players: User[] = [];

  constructor(private router: Router,
              private http: Http) {
    }

    ngOnInit(){          
      this.isRequesting = true;
      let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
      let options = new RequestOptions({ headers: headers });

      this.http.get(environment.api + `users.json`, options)
        .subscribe(data => {
          this.players = User.deserializeArray(data.json());          
          this.isRequesting = false;
        });
    }

    goTo(idMatch){
      this.router.navigate(['match/' + idMatch ]);
    }

    sort_by_rating(){
      this.players.sort(function (a, b) {
        return b.rating - a.rating;
      });
    }

}
