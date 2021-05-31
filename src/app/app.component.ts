import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { FBLoginService } from './fblogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  isFBLogin: boolean = false;
  isGoogleLogin: boolean = false;
  fb: any = {};
  google: any = {};
  constructor(
    private authService: SocialAuthService,
    private fbService: FBLoginService
  ) {}
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    this.fbService.init();
  }

  signInWithGoogle() {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        console.log(res);
        this.isGoogleLogin = true;
        this.google = res;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async signInWithFB() {
    // this.authService
    //   .signIn(FacebookLoginProvider.PROVIDER_ID)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => console.log(error));
    try {
      let data = await this.fbService.login();
      this.isFBLogin = true;
      console.log(data);
      this.fb = data;
    } catch (error) {
      console.log(error);
    }
  }

  signOut() {
    this.authService.signOut();
  }
}
