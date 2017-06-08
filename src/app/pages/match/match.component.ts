import {Component, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation, isDevMode} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MatchComponent {

  idMatch: number;

  constructor(private route: ActivatedRoute){

  }
    
  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.idMatch = Number(params['idMatch']);
      });
  }

}