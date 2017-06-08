import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class CalendarComponent {
  constructor(private router: Router) {
    }

    goTo(idMatch){
      this.router.navigate(['match/' + idMatch ]);
    }

}