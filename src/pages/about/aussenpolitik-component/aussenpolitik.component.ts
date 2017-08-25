import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AboutComponent } from '../about-component/about-component.component'

@Component({
  selector: "page-aussenpolitik",
  templateUrl: "aussenpolitik.html"
})
export class AussenpolitikComponent {
  constructor(public navCtrl: NavController) {}

}
