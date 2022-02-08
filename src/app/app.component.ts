import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elmaPhotography';
  routeHidden = true;

  constructor(
    private router: Router) { }

    ngOnInit() {
      this.router.events.subscribe( (e) => {
        if (e instanceof NavigationStart) {
          if (e.url === "/home") {
              this.routeHidden = false;
          } else {
              this.routeHidden = true;
          }
        }
      })
    }
  
}
