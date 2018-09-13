import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { CommonService } from '../../shared/common';
import { ProductdetailsPage } from '../productdetails/productdetails';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = 'app';
  public products = [];  
  public cartList = [];
  public cartTotalPrice = '0.00';
  public currentUser: any;
  constructor(public navCtrl: NavController, public productProvider: ProductProvider, public commonService: CommonService) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.productProvider.getSpecialDeals().subscribe((response: any) => {
      this.products = response;
      this.products.sort(function (a, b) {
        let f = Date.parse(b.CreatedDate);
        let s = Date.parse(a.CreatedDate);
        f = f / 1000;
        s = s / 1000;
        return s - f;
      })
    });
  }

  viewProductDetails(product) {
    product = { name: 'Marty McFly',
        description: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        price: '2100.02',
        stockIsAvailable: false,
        category: 'Clothes',
        colors: 'red, black, green',
        isOnSpecial: false,
        discount: '',
        imageName: 'name',
        imageName1: '',
        imageName2: '',
        imageName3: '',
        storeId: 0,
        createdDate: '',
        id: 0,
        rejectReason: null,
        isActive: null};
    this.navCtrl.push(ProductdetailsPage,product)
  }

  addProductToCart(product) {
    this.cartList = JSON.parse(sessionStorage.getItem('cartList'));
    let addProduct = true;
    if (this.cartList != null) {
      for (let cartProduct of this.cartList) {
        if (cartProduct.Id == product.Id) {
          addProduct = false;
          break;
        }
      }
    }else
      this.cartList = [];

    if (addProduct) {
      this.cartList.push(product);
      this.commonService.cartList = this.cartList; // this change will broadcast to every subscriber like below component
      sessionStorage.setItem('cartList', JSON.stringify(this.cartList));
    }
  }
}
