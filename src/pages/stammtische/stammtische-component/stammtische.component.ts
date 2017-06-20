import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

export class MyPage {
  constructor(public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
@Component({
  selector: 'page-stammtische',
  templateUrl: 'stammtische.html'
})
export class StammtischeComponent {

  constructor(public navCtrl: NavController) {

  }

}
