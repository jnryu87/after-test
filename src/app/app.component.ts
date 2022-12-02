import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, map } from 'rxjs';

const navRequired = [
  '/',
  '/protected'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public shouldShowNavBar: boolean = false;
  public title = 'angular-fun';

  public constructor(
  ) {}


  public loginClicked(): void {
    localStorage.setItem('isLoggedin', 'true');
  }

  public logoutClicked(): void {
    localStorage.removeItem('isLoggedin');
  }
}
