import { Component } from '@angular/core';

import { HomeComponent } from '../../home/home-component/home.component';
import { ContactComponent } from '../../contact/contact-component/contact.component';
import { WordpressFavorites } from '../../wordpress/wordpress-favorites/wordpress-favorites.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeComponent;
  tab2Root: any = ContactComponent;
  tab3Root: any = WordpressFavorites;


  constructor() {

  }
}
