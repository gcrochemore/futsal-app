import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode} from "@angular/core";
import {Router} from "@angular/router";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../../environments/environment";

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class UsersComponent {

  players: [{}] = [{name: 'Souleymane', rating: 81, picture: 'lacazette.png', company: 'trsb.png'},
                   {name: 'Mederic', rating: 85, picture: 'ronaldo.png', company: 'trsb.png'},
                   {name: 'Guillaume', rating: 84, picture: 'forlan.png', company: 'trsb.png'},
                   {name: 'Arthur', rating: 65, picture: 'mathieu.png', company: 'trsb.png'},
                   {name: 'Etienne', rating: 76, picture: 'rooney.png', company: 'trsb.png'},
                   {name: 'Gwen', rating: 78, picture: 'gillet.png', company: 'trsb.png'},
                   {name: 'Clement', rating: 80, picture: 'bernardo-silva.png', company: 'trsb.png'},
                   {name: 'Robin', rating: 70, picture: 'ribery.png', company: 'trsb.png'},
                   {name: 'Joueur 4', rating: 65, picture: 'messi.png', company: 'trsb.png'},
                   {name: 'Joueur 5', rating: 76, picture: 'messi.png', company: 'trsb.png'},
                   {name: 'Joueur 6', rating: 84, picture: 'messi.png', company: 'trsb.png'}];

  players_api: [{}] = [{name: 'Player API !', rating: 81, picture: 'lacazette.png', company: 'trsb.png'}];

  constructor(private router: Router,
              private http: Http) {
    }

    ngOnInit(){
      console.log('init ');
      this.http.get(environment.api + `users.json`)
        .subscribe(data => console.log('La reponse : ', data.json()));
    }

    goTo(idMatch){
      this.router.navigate(['match/' + idMatch ]);
    }

}
