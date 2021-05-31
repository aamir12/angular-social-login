import { Injectable } from '@angular/core';
declare var FB: any;
@Injectable({
  providedIn: 'root',
})
export class FBLoginService {
  constructor() {}
  init() {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '367877093727627',
        cookie: true,
        xfbml: true,
        version: 'v9.0',
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
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  login() {
    const promise = new Promise((resolve, reject) => {
      FB.login(
        function (response) {
          if (response.status === 'connected') {
            FB.api('/me?fields=email,name', function (response) {
              resolve(response);
            });
          }
        },
        { scope: 'public_profile,email' }
      );
    });
    return promise;
  }
}
