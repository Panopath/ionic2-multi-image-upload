import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {Ionic2MultiImageUploadDemo} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Ionic2MultiImageUploadDemo,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Ionic2MultiImageUploadDemo)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Ionic2MultiImageUploadDemo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
