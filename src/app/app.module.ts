import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

// const fbLoginOptions = {
//   scope:
//     'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
//   return_scopes: true,
//   enable_profile_selector: true,
// };

const fbLoginOptions = {
  scope: 'public_profile,email',
  return_scopes: true,
  enable_profile_selector: true,
  version: 'v9.0',
};

const googleLoginOptions = {
  scope: 'profile email',
};

let socialAuthconfig: SocialAuthServiceConfig = {
  providers: [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('GOOGLE_CLIENT_ID', googleLoginOptions),
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('FACEBOOK_APP_ID', fbLoginOptions),
    },
  ],
};

export function provideConfig() {
  return socialAuthconfig;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocialLoginModule, AppRoutingModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useFactory: provideConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
