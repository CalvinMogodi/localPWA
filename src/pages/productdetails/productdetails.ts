import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonService } from '../../shared/common';

/**
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
})
export class ProductdetailsPage {
  public product = this.commonService.product;
  public colors = [
    'orange','black','green','red'
  ];
  public sizes = ['5','6','7'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public commonService : CommonService) {
    this.product = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailsPage');
  }

}
