import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { TermsandconditionsPage } from '../pages/termsandconditions/termsandconditions';
import { CommonService } from '../shared/common';
import { ProductdetailsPage } from '../pages/productdetails/productdetails';

import { UserProvider } from '../providers/user';
import { StoreProvider } from '../providers/store';
import { ProductProvider } from '../providers/product';
import { OrderProvider } from '../providers/order';

import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ForgotpasswordPage,
    TermsandconditionsPage,
    ProductdetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    ForgotpasswordPage,
    TermsandconditionsPage,
    ProductdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    UserProvider,
    StoreProvider,
    OrderProvider,
    ProductProvider,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
