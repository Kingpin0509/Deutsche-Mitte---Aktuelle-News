import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TabsComponent } from "../../tabs/tabs-component/tabs.component";

@Component({
  templateUrl: "slides.html"
})
export class SlidesComponent {
  constructor(public nav: NavController) {}

  slides = [
    {
      title: "Zum Kennenlernen",
      description:
        "Schauen sie gern in unseren online Stammtisch vorbei. Oder kommen sie persönlich zu unseren Stammtischtreffen in jeder größeren Stadt",
      description1: "www.dm-stammtisch.de",
      image: "assets/img/ica-slidebox-img-4.png"
    },
    {
      title: "SCHREIBEN SIE MIT UNS GESCHICHTE!!!",
      description:
        "Sind Sie Zuschauer - oder Teil der notwendigen und überfälligen Veränderung?",
      description1: "",
      image: "assets/img/ica-slidebox-img-3.png"
    },
    {
      title: "Wir haben nur diese eine Chance",
      description: "Machen Sie mit !",
      description1: "Kommen Sie in die Deutsche Mitte",
      image: "assets/img/ica-slidebox-img-7.png"
    }
  ];
  openPage() {
    this.nav.setRoot(TabsComponent);
  }
}
