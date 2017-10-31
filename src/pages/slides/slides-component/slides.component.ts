import { Component } from "@angular/core";
import { NavController, MenuController, AlertController } from "ionic-angular";
import { TabsComponent } from "../../tabs/tabs-component/tabs.component";
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: "slides.html"
})
export class SlidesComponent {
  showSkip = true;
  constructor(
    public nav: NavController,
    public menu: MenuController,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {}
  openPage() {
    this.nav.setRoot(TabsComponent).then(() => {
      this.storage.set("hasSeenTutorial", "true");
    });
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: "Intro ausblenden?",
      message: "Kann unter Einstellungen erneut aktiviert werden.",
      buttons: [
        {
          text: "Erneut anzeigen",
          handler: () => {
            this.nav.setRoot(TabsComponent);
            console.log("Disagree clicked");
          }
        },
        {
          text: "Weiter",
          handler: () => {
            this.nav.setRoot(TabsComponent).then(() => {
              this.storage.set("hasSeenTutorial", "true");
              console.log("Agree clicked");
            });
          }
        }
      ]
    });
    confirm.present();
  }
}
