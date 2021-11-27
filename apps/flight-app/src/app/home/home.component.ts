/* eslint-disable no-restricted-syntax */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  expertMode = false;
  needsLogin$: Observable<boolean>;
  userName = '<unknown user>';

  userInfo = null;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.needsLogin$ = this.route.params.pipe(
      map(params => !!params['needsLogin'])
    );

    this.authService.loadUserInfo().subscribe(
      (userInfo) => {
        this.userName = userInfo['given_name'];
        this.userInfo = userInfo;
      } 
    );
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
