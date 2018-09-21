import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  swiper: any;
  @ViewChild('slider') slider: any;
  slidesOptions = { initialSlide: 0 }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.slider.lockSwipes(true);
  }

  slideNext() {
    this.slider.lockSwipes(false);
    if (this.swiper) {
      this.swiper.unlockSwipes();
    }
    this.slider.slideNext();
    this.slider.lockSwipes(true);
  }

  slideBack() {
    this.slider.lockSwipes(false);
    if (this.swiper) {
      this.swiper.unlockSwipes();
    }
    this.slider.slideNext();
    this.slider.lockSwipes(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
