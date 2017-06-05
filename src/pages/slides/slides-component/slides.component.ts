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
      description: "Diese App stellt dir stets aktuelle Informationen bereit, über die Partei",
      description1: "-Deutsche Mitte-",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Inoffizielle App",
      description: "Verantwortlich für diese App ist ausschließlich der Entwickler, nicht die Partei",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Immer griffbereit",
      description: "Aktuelle Beiträge und Artikel von der Internetseite der Partei, sowie die neuesten Videos auf Youtube",
      image: "assets/img/ica-slidebox-img-3.png",
    },
    {
      title: "Wunsch nach Wandel?",
      description: "Den Wandel aktiv unterstützen zu können bedingt, sich zuvor umfassendes Wissen erarbeitet zu haben",
      description1: "Der Wunsch nach Veränderung bleibt bedeutungslos, ohne den Willen zur Tat. Und der Wille zur Tat bleibt nutzlos, ohne das Wissen",
      image: "assets/img/ica-slidebox-img-4.png",
    },
  ];
  openPage() {
    this.nav.setRoot(TabsComponent);
  }
}
