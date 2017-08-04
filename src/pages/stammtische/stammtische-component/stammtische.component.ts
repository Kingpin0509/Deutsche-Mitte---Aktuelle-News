import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-stammtische',
  templateUrl: 'stammtische.html'
})
export class StammtischeComponent {
  constructor(
    private navCtrl: NavController,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.getStart();

  }
  getStart() {
    let loading = this.loadingController.create({
      content: 'Suche Stammtische...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
}
