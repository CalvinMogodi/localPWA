import { Component } from '@angular/core';
import { ModalController, Platform, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CommonService } from '../../shared/common';
import { AddeditproductPage } from '../addeditproduct/addeditproduct';

/**
 * Generated class for the StoredetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storedetails',
  templateUrl: 'storedetails.html',
})
export class StoredetailsPage {
  public heading = "New Store";
  public showStoreError = true;
  public storeError = 'error';
  public store = this.commonService.store;
  public products = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public commonService : CommonService, public modalCtrl: ModalController) {
    this.store = navParams.data.store;
    this.heading = navParams.data.action;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoredetailsPage');
  }

  goToProduct(product, action){
    let modal = this.modalCtrl.create(AddeditproductPage, {store: product, action: action});
    modal.present();
  }

}
