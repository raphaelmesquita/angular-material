import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  @ViewChild(MatSidenav) sidenav: MatSidenav
  
  users$: Observable<User[]>;

  isDarkTheme: boolean;
  dir: string = "ltr";

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(
    zone: NgZone,
    private _userService: UserService,
    private _router: Router) {

    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.users$ = this._userService.users$;
    this._userService.loadAll();
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme
  }

  toggleDir() {
    this.dir = this.dir == "ltr" ? "rtl" : "ltr";
  }
}
