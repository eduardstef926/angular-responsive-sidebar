import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from './services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loggedIn = false;
  userId!: number;

  constructor(private localStorage: LocalStorageService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // if (this.localStorage.get("loggedIn")) {
    //   this.loggedIn = true;
    // } 
  }

  lookLocationsPage(event : Event) {
    event.preventDefault();
    this.router.navigate(['/locations']);
  }

  lookEmployeePage(event : Event) {
    event.preventDefault();
    this.router.navigate(['/employees']);
  }

  goHome(event : Event) {
    event.preventDefault();
    this.router.navigate(['']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
