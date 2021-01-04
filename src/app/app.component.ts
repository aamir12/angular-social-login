import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(private authService: SocialAuthService) {}
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  signInWithGoogle() {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signInWithFB() {
    this.authService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }

  signOut() {
    this.authService.signOut();
  }
}
