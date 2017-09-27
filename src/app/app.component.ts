import { Component, ViewChild } from "@angular/core";
import {
  LoadingController,
  MenuController,
  ModalController,
  Nav,
  Platform
} from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";
import { TranslateService } from "ng2-translate";
import { Config } from "./app.config";
// import { Splash } from "../pages/splash/splash.module";
import { SlidesComponent } from "../pages/slides/slides-component/slides.component";
import { TabsComponent } from "../pages/tabs/tabs-component/tabs.component";
import { WordpressMenus } from "../pages/wordpress/wordpress-menus/wordpress-menus.component";
import { WordpressPosts } from "../pages/wordpress/wordpress-posts/wordpress-posts.component";
import { WordpressFavorites } from "../pages/wordpress/wordpress-favorites/wordpress-favorites.component";
import { WordpressCategories } from "../pages/wordpress/wordpress-categories/wordpress-categories.component";
//import { WordpressTags } from '../pages/wordpress/wordpress-tags/wordpress-tags.component';
//import { WordpressPages } from '../pages/wordpress/wordpress-pages/wordpress-pages.component';
import { WordpressPageDownloads } from "../pages/wordpress/wordpress-page-downloads/wordpress-page-downloads.component";
import { YoutubeChannelComponent } from "../pages/youtube/youtube-channel/youtube-channel.component";
import { AboutComponent } from "../pages/about/about-component/about.component";
import { PlaceholderComponent } from "../pages/placeholder/placeholder-component/placeholder.component";
import { DownloadsComponent } from "../pages/downloads/downloads-component/downloads.component";
import { SettingsComponent } from "../pages/settings/settings-component/settings.component";
import { StammtischeComponent } from "../pages/stammtische/stammtische-component/stammtische.component";
import { FacebookConnectComponent } from "../pages/facebook-connect/facebook-connect-component/facebook-connect.component";
// import { QuizComponent } from "../pages/quiz/quiz-component/quiz";
// import { FeedCategoriesComponent } from "../pages/feeds/feed-categories/feed-categories.component";
// import { FeedCategoryComponent } from "../pages/feeds/feed-category/feed-category.component";
// import { FirebaseHomeComponent } from "../pages/firebase/firebase-home/firebase-home.component";
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { BarcodeScannerComponent } from '../pages/barcode-scanner/barcode-scanner-component/barcode-scanner.component';
// import { NewsletterComponent } from '../pages/newsletter/newsletter-component/newsletter.component';
// import { GridComponent } from '../pages/grid/grid-component/grid.component';
// import { DatetimeComponent } from '../pages/datetime/datetime-component/datetime.component';
// import { RangesComponent } from '../pages/ranges/ranges-component/ranges.component';
// import { ActionSheetComponent } from '../pages/action-sheet/action-sheet-component/action-sheet.component';
// import { GoogleMapsComponent } from '../pages/google-maps/google-maps-component/google-maps.component';
// import { LoginComponent } from '../pages/login/login-component/login.component';

@Component({
  templateUrl: "./app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = SlidesComponent;
  menuPage = WordpressMenus;
  page: any;
  pages: Array<{ title: string; component: any; icon: string }>;
  pageshidden: Array<{ title: string; component: any; icon: string }>;
  pagesleft: Array<{ title: string; component: any; icon: string }>;
  pagesleftcenter: Array<{ title: string; component: any; icon: string }>;
  pagesleftfooter: Array<{ title: string; component: any; icon: string }>;
  pagesright: Array<{ title: string; component: any; icon: string }>;
  pagesrightfooter: Array<{ title: string; component: any; icon: string }>;
  wordpressMenusNavigation: boolean = false;
  constructor(
    private config: Config,
    private platform: Platform,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private splashScreen: SplashScreen,
    private translate: TranslateService,
    private menuController: MenuController,
    private statusBar: StatusBar,
    private modalCtrl: ModalController
  ) {
    // platform.ready().then(() => {
    //   statusBar.styleDefault();
    //   let splash = modalCtrl.create(Splash);
    //   splash.present();
    // });
    this.initializeApp();
    this.translate.setDefaultLang("de");
    storage.get("language").then(value => {
      if (value) {
        this.translate.use(value);
      } else {
        this.translate.use("de");
        this.storage.set("language", "de");
      }
    });
    this.pagesleft = [
      { title: "HOME", component: TabsComponent, icon: "home" }
    ];
    this.pageshidden = [
      { title: "YOUTUBE", component: YoutubeChannelComponent, icon: "pin" },
      //     { title: "FIREBASE", component: FirebaseHomeComponent, icon: "pin" },
      { title: "POSTS", component: WordpressPosts, icon: "paper" },
      {
        title: "CATEGORIES",
        component: WordpressCategories,
        icon: "bookmarks"
      },
      {
        title: "Facebook Connect",
        component: FacebookConnectComponent,
        icon: "logo-facebook"
      }
    ];
    this.pagesleftcenter = [
      { title: "ABOUT", component: AboutComponent, icon: "information-circle" },
      { title: "PLACEHOLDER", component: PlaceholderComponent, icon: "book" },
      { title: "DOWNLOADS", component: DownloadsComponent, icon: "download" }
      //      { title: "QUIZ", component: QuizComponent, icon: "help" }
      //      { title: 'DOWNLOADS', component: WordpressPageDownloads, icon: 'bookmarks' },
      //      { title: 'MENU', component: WordpressMenus, icon: 'bookmarks' },
      //      { title: 'TAGS', component: WordpressTags, icon: 'bookmark' },
      //      { title: 'PAGES', component: WordpressPages, icon: 'document' }
      //		  { title: 'BARCODE_SCANNER', component: BarcodeScannerComponent, icon: 'barcode' },
      //      { title: "FEEDS", component: FeedCategoriesComponent, icon: "logo-rss" },
      //      { title: "FEED_CATEGORY",component: FeedCategoryComponent,icon: "logo-rss"},
      //		  { title: 'GRID', component: GridComponent, icon: 'grid'},
      //		  { title: 'DATETIME', component: DatetimeComponent, icon: 'clock'},
      //		  { title: 'RANGES', component: RangesComponent, icon: 'sunny'},
      //		  { title: 'ACTION_SHEET', component: ActionSheetComponent, icon: 'create'},
      //		  { title: 'LOGIN', component: LoginComponent, icon: 'log-in' }
    ];
    this.pagesleftfooter = [
      //	    { title: 'NEWSLETTER', component: NewsletterComponent, icon: 'help' },
      { title: "SETTINGS", component: SettingsComponent, icon: "options" },
      { title: "STAMMTISCHE", component: StammtischeComponent, icon: "pin" }
    ];
    this.pagesright = [
      //		  { title: 'STAMMTISCHE', component: StammtischeComponent, icon: 'pin' }
    ];
    this.pagesrightfooter = [
      { title: "FAVORITES", component: WordpressFavorites, icon: "thumbs-up" }
    ];
    this.wordpressMenusNavigation = config.wordpressMenusNavigation;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#005397");
      this.statusBar.styleBlackTranslucent();
      //      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    let loader = this.loadingCtrl.create({
      spinner: "bubbles",
      cssClass: `apphome`,
      content: `Bitte Warten...`,
      duration: 750
    });
    loader.present();
    this.menuController.close();
    this.nav.setRoot(page.component);
  }
  pushPage(page) {
    this.menuController.close();
    this.nav.push(page.component);
  }
  openPageStammtische(page) {
    this.menuController.close();
    this.nav.push(StammtischeComponent);
  }

  openPageWordpress(page) {
    this.menuController.close();
    this.nav.push(WordpressPageDownloads, {
      page: page
    });
  }
}
// openPageYoutube(page) {
//   this.menuController.close();
//   this.nav.push(YoutubeChannelComponent);
// }
// startSplash(page) {
//   this.menuController.close();
//   let splash = this.modalCtrl.create(Splash);
//   splash.present();
// }
// openPageSettings(page) {
// 	this.menuController.close();
// 	this.nav.push(SettingsComponent);
// }
// openPageFavorites(page) {
// 	this.menuController.close();
// 	this.nav.push(deutsche-mitte.de/wp-content/uploads/2017);
// }
// openPagePosts(page) {
// 	this.menuController.close();
// 	this.nav.push(WordpressPosts);
// }
// openPageCategories(page) {
// 	this.menuController.close();
// 	this.nav.push(WordpressCategories);
// }
// openPageQuiz(page) {
// 	this.menuController.close();
// 	this.nav.push(QuizComponent);
// }
// openPageFacebook(page) {
// 	this.menuController.close();
// 	this.nav.push(FacebookConnectComponent);
// }
