import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";

@Component({
  selector: "page-verteidigung",
  templateUrl: "verteidigung.html"
})
export class VerteidigungComponent {
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
