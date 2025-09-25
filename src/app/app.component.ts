import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
   showNotFound = false;

   

  constructor(private router: Router){
      this.router.events.subscribe(event=> {
      if (event instanceof NavigationEnd) {
        const validRoutes = ['/', '/home', '/skills', '/projects', '/experience', '/contact'];
        this.showNotFound = !validRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
