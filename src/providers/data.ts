import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Storage } from "@ionic/storage";

import "rxjs/add/operator/map";

@Injectable()
export class Data {
  data: any;
  HAS_SEEN_TUTORIAL = "hasSeenTutorial";

  constructor(public http: Http, public storage: Storage) {}

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then(value => {
      return value;
    });
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get("assets/data/questions.json")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.questions;
          resolve(this.data);
        });
    });
  }
}
