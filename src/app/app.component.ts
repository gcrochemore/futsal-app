import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private location: Location,
              private router: Router) { } // inject Location into class constructor


  goTo(target){
    this.router.navigate([target ]);
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
