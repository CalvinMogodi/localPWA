import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { CommonService } from '../../shared/common';

/**
 * Generated class for the AddeditproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addeditproduct',
  templateUrl: 'addeditproduct.html',
})
export class AddeditproductPage {

  public productCategories = this.commonService.productCategories;
  public sizeCategories = this.commonService.sizeCategories;
  public sizes = [];
  public colors = this.commonService.colors;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public commonService : CommonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeditproductPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  sizeCategoryChanged(text){

    switch(text){
      case 'General Sizes':
        this.sizes = this.commonService.generalSizes;
        break
      case 'Shoes Sizes':
        this.sizes = this.commonService.shoesSizes;
        break
      case 'Pants Sizes':
        this.sizes = this.commonService.pantsSizes;
        break
      case 'Tops Sizes':
        this.sizes = this.commonService.topsSizes;
        break
    }
  }

}
