import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";

@Component({
  selector: "page-wirtschaft",
  templateUrl: "wirtschaft.html"
})
export class WirtschaftComponent {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
