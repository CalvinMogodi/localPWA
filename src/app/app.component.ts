import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BasketPage } from '../pages/basket/basket';
import { MyordersPage } from '../pages/myorders/myorders';
import { LoginPage } from '../pages/login/login';
import { StorePage } from '../pages/store/store';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public userDisplayName = "CM";
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Basket', component: BasketPage },
      { title: 'My Oorders', component: MyordersPage },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    switch(page) {
      case 'HomePage':
          this.nav.setRoot(this.pages[0].component);
          break;
      case 'BasketPage':
          this.nav.push(this.pages[1].component);
          break;
      case 'MyordersPage':
          this.nav.push(this.pages[2].component);
          break;
    }
  }
}
