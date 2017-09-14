import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, MenuController, ModalController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoadingController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { TranslateService } from "ng2-translate";
import { Config } from "./app.config";
import { PlaceholderComponent } from "../pages/placeholder/placeholder-component/placeholder.component";
import { DownloadsComponent } from "../pages/downloads/downloads-component/downloads.component";
//import { NewsletterComponent } from '../pages/newsletter/newsletter-component/newsletter.component';
import { TabsComponent } from "../pages/tabs/tabs-component/tabs.component";
import { AboutComponent } from "../pages/about/about-component/about.component";
import { SettingsComponent } from "../pages/settings/settings-component/settings.component";
import { WordpressMenus } from "../pages/wordpress/wordpress-menus/wordpress-menus.component";
import { WordpressPosts } from "../pages/wordpress/wordpress-posts/wordpress-posts.component";
import { WordpressFavorites } from "../pages/wordpress/wordpress-favorites/wordpress-favorites.component";
import { YoutubeChannelComponent } from "../pages/youtube/youtube-channel/youtube-channel.component";
import { WordpressCategories } from "../pages/wordpress/wordpress-categories/wordpress-categories.component";
// import { WordpressTags } from '../pages/wordpress/wordpress-tags/wordpress-tags.component';
import { SlidesComponent } from "../pages/slides/slides-component/slides.component";
import { StammtischeComponent } from "../pages/stammtische/stammtische-component/stammtische.component";
import { QuizComponent } from "../pages/quiz/quiz-component/quiz";
import { Splash } from "../pages/splash/splash.module";
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { BarcodeScannerComponent } from '../pages/barcode-scanner/barcode-scanner-component/barcode-scanner.component';
// import { FeedCategoriesComponent } from '../pages/feeds/feed-categories/feed-categories.component';
// import { FeedCategoryComponent } from '../pages/feeds/feed-category/feed-category.component';
// import { GridComponent } from '../pages/grid/grid-component/grid.component';
// import { DatetimeComponent } from '../pages/datetime/datetime-component/datetime.component';
// import { RangesComponent } from '../pages/ranges/ranges-component/ranges.component';
// import { ActionSheetComponent } from '../pages/action-sheet/action-sheet-component/action-sheet.component';
// import { GoogleMapsComponent } from '../pages/google-maps/google-maps-component/google-maps.component';
// import { FacebookConnectComponent } from '../pages/facebook-connect/facebook-connect-component/facebook-connect.component';
// import { WordpressPages } from '../pages/wordpress/wordpress-pages/wordpress-pages.component';
// import { WordpressPageDownloads } from '../pages/wordpress/wordpress-page-downloads/wordpress-page-downloads.component';
// import { LoginComponent } from '../pages/login/login-component/login.component';
// import { FirebaseHomeComponent } from '../pages/firebase/firebase-home/firebase-home.component';

@Component({
  templateUrl: "./app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //	rootPage = TabsComponent;
  rootPage = SlidesComponent;
  menuPage = WordpressMenus;
  pages: Array<{ title: string; component: any; icon: string }>;
  pagesleft: Array<{ title: string; component: any; icon: string }>;
  pagesleftcenter: Array<{ title: string; component: any; icon: string }>;
  pagesleftfooter: Array<{ title: string; component: any; icon: string }>;
  pagesright: Array<{ title: string; component: any; icon: string }>;
  pagesrightfooter: Array<{ title: string; component: any; icon: string }>;
  wordpressMenusNavigation: boolean = false;
  constructor(
    private platform: Platform,
    private translate: TranslateService,
    private storage: Storage,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private config: Config,
    private menuController: MenuController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      let splash = modalCtrl.create(Splash);
      splash.present();
    });
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
      { title: "HOME", component: TabsComponent, icon: "home" },
      { title: "POSTS", component: WordpressPosts, icon: "paper" },
      { title: "CATEGORIES", component: WordpressCategories, icon: "bookmarks" }
      //{ title: 'PAGES', component: WordpressPages, icon: 'bookmarks' },
      //{ title: 'DOWNLOADS', component: WordpressPageDownloads, icon: 'bookmarks' },
    ];
    this.pagesleftcenter = [
      { title: "ABOUT", component: AboutComponent, icon: "information-circle" },
      { title: "PLACEHOLDER", component: PlaceholderComponent, icon: "book" },
      { title: "DOWNLOADS", component: DownloadsComponent, icon: "download" },
      { title: "QUIZ", component: QuizComponent, icon: "help" }
      //		  { title: 'TAGS', component: WordpressTags, icon: 'bookmark' },
      //		  { title: 'BARCODE_SCANNER', component: BarcodeScannerComponent, icon: 'barcode' },
      //		  { title: 'FEEDS', component: FeedCategoriesComponent, icon: 'logo-rss',},
      //		  { title: 'FEED_CATEGORY', component: FeedCategoryComponent, icon: 'logo-rss',},
      //		  { title: 'GOOGLE_MAPS', component: GoogleMapsComponent, icon: 'pin' },
      //		  { title: 'PAGES', component: WordpressPages, icon: 'document' },
      //		  { title: 'GRID', component: GridComponent, icon: 'grid'},
      //		  { title: 'DATETIME', component: DatetimeComponent, icon: 'clock'},
      //		  { title: 'RANGES', component: RangesComponent, icon: 'sunny'},
      //		  { title: 'ACTION_SHEET', component: ActionSheetComponent, icon: 'create'},
      //		  { title: 'Facebook Connect', component: FacebookConnectComponent, icon: 'logo-facebook' },
      //		  { title: 'LOGIN', component: LoginComponent, icon: 'log-in' }
    ];
    this.pagesleftfooter = [
      //	{ title: 'NEWSLETTER', component: NewsletterComponent, icon: 'help' },
      { title: "SETTINGS", component: SettingsComponent, icon: "options" }
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
      // Enable RTL Support
      // this.platform.setDir('rtl', true);
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#005397");
      this.statusBar.styleBlackTranslucent();
      this.statusBar.hide();
      // this.splashScreen.hide();
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
  openPageYoutube(page) {
    this.menuController.close();
    this.nav.push(YoutubeChannelComponent);
  }
}

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
// openPageFirebase(page) {
// 	this.menuController.close();
// 	this.nav.push(FirebaseHomeComponent);
// }
