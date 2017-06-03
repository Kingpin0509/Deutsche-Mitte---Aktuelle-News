import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsComponent } from '../../tabs/tabs-component/tabs.component';
//import { HomeComponent } from '../../home/home-component/home.component';

@Component({
  templateUrl: 'slides.html'
})
export class SlidesComponent {
  constructor(public nav: NavController) {}

  slides = [
    {
      title: "Herzlich Willkommen",
      description: "Mit dieser App bleibst du stets Informiert über die neuesten Entwicklungen bei der Deutschen Mitte",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Inoffizielle App",
      description: "Verantwortlich für diese App ist ausschließlich der Entwickler, nicht die Partei",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Immer griffbereit",
      description: "Aktuelle Beiträge der DM Homepage, sowie die neuesten Uploads auf dem Youtubekanal der Partei",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "DU bist die Veränderungen",
      description: "Der Wunsch nach Veränderung bleibt bedeutungslos, ohne den Willen zur Tat",
      image: "assets/img/ica-slidebox-img-4.png",
    },
  ];
  openPage() {
    this.nav.setRoot(TabsComponent);
  }
}
