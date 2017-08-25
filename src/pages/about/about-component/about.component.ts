import { Component } from "@angular/core";
import { AlertController, NavController, ModalController } from "ionic-angular";
import { AussenpolitikComponent } from "../aussenpolitik-component/aussenpolitik.component";
import { InnenpolitikComponent } from "../innenpolitik-component/innenpolitik.component";
import { FinanzenComponent } from "../finanzen-component/finanzen.component";
import { WirtschaftComponent } from "../wirtschaft-component/wirtschaft.component";
import { ArbeitComponent } from "../arbeit-component/arbeit.component";
import { VerteidigungComponent } from "../verteidigung-component/verteidigung.component";
import { BildungComponent } from "../bildung-component/bildung.component";
import { FamilieComponent } from "../familie-component/familie.component";
import { UmweltComponent } from "../umwelt-component/umwelt.component";
import { NahrungComponent } from "../nahrung-component/nahrung.component";
import { GesundheitComponent } from "../gesundheit-component/gesundheit.component";
import { VerkehrComponent } from "../verkehr-component/verkehr.component";
import { EntwicklungComponent } from "../entwicklung-component/entwicklung.component";
import { JustizComponent } from "../justiz-component/justiz.component";

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutComponent {
  constructor(
    public navCtrl: NavController,
    public alerCtrl: AlertController,
    public modalCtrl: ModalController
  ) {}
  openAussenpolitik() {
    let myModal = this.modalCtrl.create(AussenpolitikComponent);
    myModal.present();
  }
  openInnenpolitik() {
    let myModal = this.modalCtrl.create(InnenpolitikComponent);
    myModal.present();
  }
  openFinanzen() {
    let myModal = this.modalCtrl.create(FinanzenComponent);
    myModal.present();
  }
  openWirtschaft() {
    let myModal = this.modalCtrl.create(WirtschaftComponent);
    myModal.present();
  }
  openArbeit() {
    let myModal = this.modalCtrl.create(ArbeitComponent);
    myModal.present();
  }
  openVerteidigung() {
    let myModal = this.modalCtrl.create(VerteidigungComponent);
    myModal.present();
  }
  openBildung() {
    let myModal = this.modalCtrl.create(BildungComponent);
    myModal.present();
  }
  openFamilie() {
    let myModal = this.modalCtrl.create(FamilieComponent);
    myModal.present();
  }
  openUmwelt() {
    let myModal = this.modalCtrl.create(UmweltComponent);
    myModal.present();
  }
  openNahrung() {
    let myModal = this.modalCtrl.create(NahrungComponent);
    myModal.present();
  }
  openGesundheit() {
    let myModal = this.modalCtrl.create(GesundheitComponent);
    myModal.present();
  }
  openVerkehr() {
    let myModal = this.modalCtrl.create(VerkehrComponent);
    myModal.present();
  }
  openEntwicklung() {
    let myModal = this.modalCtrl.create(EntwicklungComponent);
    myModal.present();
  }
  openJustiz() {
    let myModal = this.modalCtrl.create(JustizComponent);
    myModal.present();
  }
}
