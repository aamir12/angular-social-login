import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleLoginService {
  constructor() {}
  auth2: any;
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id:
            '633971119752-9cdf3nnjvt2v4nbn0imi62ao5clk6lcn.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email',
        });
        this.prepareLogin();
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  }

  prepareLogin() {
    this.auth2.attachClickHandler(
      this.loginElement.nativeElement,
      {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        this.show = true;
        this.Name = profile.getName();
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      },
      (error) => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  }
}
