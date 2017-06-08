import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class UsersComponent {
  constructor(private router: Router) {
    }

    goTo(idMatch){
      this.router.navigate(['match/' + idMatch ]);
    }

}