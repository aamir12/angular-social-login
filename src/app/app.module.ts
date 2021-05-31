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
      provider: new GoogleLoginProvider(
        '633971119752-9cdf3nnjvt2v4nbn0imi62ao5clk6lcn.apps.googleusercontent.com',
        googleLoginOptions
      ),
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
