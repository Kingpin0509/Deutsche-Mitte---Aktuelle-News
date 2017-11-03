import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { AppVersion } from "@ionic-native/app-version";
import { TranslateService } from "ng2-translate";
import { Nav } from "ionic-angular";
import { FirebaseHomeComponent } from "../../firebase/firebase-home/firebase-home.component";
@Component({
  templateUrl: "settings.html"
})
export class SettingsComponent implements OnInit {
  nav: Nav;
  page: any;
  versionNumber: any;
  language: string;
  checkbox: boolean;
  disabled: boolean;
  constructor(
    private storage: Storage,
    private translate: TranslateService,
    private appVersion: AppVersion
  ) {}
  ngOnInit() {
    this.storage.get("language").then(value => {
      if (value) {
        this.language = value;
      } else {
        this.language = "de";
      }
    });
  }
  getVersionNumber() {
    const versionNumber = this.appVersion.getVersionNumber();
    this.appVersion.getVersionNumber();
    console.log(versionNumber);
  }
  selectLanguage() {
    this.storage.set("language", this.language);
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }
  seenTutorial() {
    this.storage.get("hasSeenTutorial").then(hasSeenTutorial => {
      if (hasSeenTutorial) {
        this.checkbox = true;
      } else {
        this.checkbox = false;
      }
    });
  }
  toogleSeenTutorial() {
    this.storage.set("hasSeenTutorial", false);
    this.disabled = true;
  }
  pushPageFirebase(page) {
    this.nav.push(FirebaseHomeComponent);
  }
}
