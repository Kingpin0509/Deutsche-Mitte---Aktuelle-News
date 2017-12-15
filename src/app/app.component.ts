import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import {
  LoadingController,
  MenuController,
  ModalController,
  Nav,
  Platform,
  AlertController
} from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Push, PushObject, PushOptions } from "@ionic-native/push";
import { Storage } from "@ionic/storage";
import { AnimationService, AnimationBuilder } from "css-animator";
import { TranslateService } from "ng2-translate";
import { Config } from "./app.config";
// import { Splash } from "../pages/splash/splash.module";
import { SlidesComponent } from "../pages/slides/slides-component/slides.component";
import { TabsComponent } from "../pages/tabs/tabs-component/tabs.component";
import { WordpressPost } from "../pages/wordpress/wordpress-post/wordpress-post.component";
import { WordpressMenus } from "../pages/wordpress/wordpress-menus/wordpress-menus.component";
import { WordpressPosts } from "../pages/wordpress/wordpress-posts/wordpress-posts.component";
import { WordpressService } from "../pages/wordpress/shared/services/wordpress.service";
import { WordpressFavorites } from "../pages/wordpress/wordpress-favorites/wordpress-favorites.component";
import { WordpressCategories } from "../pages/wordpress/wordpress-categories/wordpress-categories.component";
//import { WordpressTags } from '../pages/wordpress/wordpress-tags/wordpress-tags.component';
//import { WordpressPages } from '../pages/wordpress/wordpress-pages/wordpress-pages.component';
import { WordpressPageDownloads } from "../pages/wordpress/wordpress-page-downloads/wordpress-page-downloads.component";
import { YoutubeChannelComponent } from "../pages/youtube/youtube-channel/youtube-channel.component";
import { AboutComponent } from "../pages/about/about-component/about.component";
import { FuturePoliticsComponent } from "../pages/futurepolitics/futurepolitics-component/futurepolitics.component";
import { DownloadsComponent } from "../pages/downloads/downloads-component/downloads.component";
import { SettingsComponent } from "../pages/settings/settings-component/settings.component";
import { StammtischeComponent } from "../pages/stammtische/stammtische-component/stammtische.component";
import { FacebookConnectComponent } from "../pages/facebook-connect/facebook-connect-component/facebook-connect.component";
// import { QuizComponent } from "../pages/quiz/quiz-component/quiz";
import { FeedService } from "../pages/feeds/shared/services/feed.service";
import { FeedComponent } from "../pages/feeds/feed/feed.component";
import { FeedCategoriesComponent } from "../pages/feeds/feed-categories/feed-categories.component";
import { FeedCategoryComponent } from "../pages/feeds/feed-category/feed-category.component";
import { FeedsComponent } from "../pages/feeds/feeds/feeds.component";
import { FirebaseHomeComponent } from "../pages/firebase/firebase-home/firebase-home.component";
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { BarcodeScannerComponent } from '../pages/barcode-scanner/barcode-scanner-component/barcode-scanner.component';
// import { NewsletterComponent } from '../pages/newsletter/newsletter-component/newsletter.component';
// import { GridComponent } from '../pages/grid/grid-component/grid.component';
// import { DatetimeComponent } from '../pages/datetime/datetime-component/datetime.component';
// import { RangesComponent } from '../pages/ranges/ranges-component/ranges.component';
// import { ActionSheetComponent } from "../pages/action-sheet/action-sheet-component/action-sheet.component";
// import { GoogleMapsComponent } from '../pages/google-maps/google-maps-component/google-maps.component';
// import { LoginComponent } from '../pages/login/login-component/login.component';

@Component({
  templateUrl: "./app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage;
  menuPage = WordpressMenus;
  menurightPage;
  category: any;
  categories: any;
  feed: any;
  favoritePosts = [];
  posts: any;
  pageCount: number;
  page: any;
  pages: Array<{ title: string; component: any; icon: string }>;
  pageshidden: Array<{ title: string; component: any; icon: string }>;
  pagesleft: Array<{ title: string; component: any; icon: string }>;
  pagesleftcenter: Array<{
    title: string;
    component: any;
    icon: string;
  }>;
  pagesleftbottom: Array<{ title: string; component: any; icon: string }>;
  pagesleftfooter: Array<{ title: string; component: any; icon: string }>;
  pagesright: Array<{ title: string; component: any; icon: string }>;
  pagesrightfooter: Array<{ title: string; component: any; icon: string }>;
  activePage: any;
  wordpressMenusNavigation: boolean = false;
  private animator: AnimationBuilder;
  constructor(
    private config: Config,
    private feedService: FeedService,
    private platform: Platform,
    private storage: Storage,
    private iab: InAppBrowser,
    private loadingCtrl: LoadingController,
    private splashScreen: SplashScreen,
    private translate: TranslateService,
    private menuController: MenuController,
    private statusBar: StatusBar,
    private modalCtrl: ModalController,
    animationService: AnimationService,
    private elementRef: ElementRef,
    public push: Push,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();
    this.animator = animationService.builder();
    this.storage.get("hasSeenTutorial").then(hasSeenTutorial => {
      if (hasSeenTutorial) {
        this.rootPage = TabsComponent;
      } else {
        this.rootPage = SlidesComponent;
      }
    });
    this.translate.setDefaultLang("de");
    storage.get("language").then(value => {
      if (value) {
        this.translate.use(value);
      } else {
        this.translate.use("de");
        this.storage.set("language", "de");
      }
    });
    this.storage.get("wordpress.favorite").then(data => {
      if (data) {
        this.favoritePosts = JSON.parse(data);
      }
    });
    this.pagesleft = [
      { title: "HOME", component: TabsComponent, icon: "home" }
      //       { title: "FIREBASE", component: FirebaseHomeComponent, icon: "pin" }
    ];
    this.pagesleftcenter = [
      { title: "ABOUT", component: AboutComponent, icon: "information-circle" },
      {
        title: "FUTUREPOLITICS",
        component: FuturePoliticsComponent,
        icon: "book"
      },
      { title: "DOWNLOADS", component: DownloadsComponent, icon: "download" }
    ];
    this.pagesleftbottom = [
      { title: "STAMMTISCHE", component: StammtischeComponent, icon: "pin" }
    ];
    this.pagesleftfooter = [
      //        { title: 'NEWSLETTER', component: NewsletterComponent, icon: 'help' },
      { title: "SETTINGS", component: SettingsComponent, icon: "options" }
    ];
    this.pagesright = [
      {
        title: "FEED_CATEGORY",
        component: FeedCategoryComponent,
        icon: "logo-rss"
      }
      //      { title: "FEEDS", component: FeedCategoriesComponent, icon: "logo-rss" }
      //		  { title: 'STAMMTISCHE', component: StammtischeComponent, icon: 'pin' }
    ];
    this.pagesrightfooter = [
      { title: "STAMMTISCHE", component: StammtischeComponent, icon: "compass" }
    ];
    //      { title: "FAVORITES", component: WordpressFavorites, icon: "thumbs-up" }
    this.pageshidden = [
      //      { title: "QUIZ", component: QuizComponent, icon: "help" }
      //      { title: 'DOWNLOADS', component: WordpressPageDownloads, icon: 'bookmarks' },
      //      { title: 'MENU', component: WordpressMenus, icon: 'bookmarks' },
      //      { title: 'TAGS', component: WordpressTags, icon: 'bookmark' },
      //      { title: 'PAGES', component: WordpressPages, icon: 'document' }
      //		  { title: 'BARCODE_SCANNER', component: BarcodeScannerComponent, icon: 'barcode' },
      //		  { title: 'GRID', component: GridComponent, icon: 'grid'},
      //		  { title: 'DATETIME', component: DatetimeComponent, icon: 'clock'},
      //		  { title: 'RANGES', component: RangesComponent, icon: 'sunny'},
      //		  { title: 'ACTION_SHEET', component: ActionSheetComponent, icon: 'create'},
      //		  { title: 'LOGIN', component: LoginComponent, icon: 'log-in' },
      { title: "YOUTUBE", component: YoutubeChannelComponent, icon: "pin" },
      { title: "POSTS", component: WordpressPosts, icon: "paper" },
      {
        title: "CATEGORIES",
        component: WordpressCategories,
        icon: "bookmarks"
      },
      { title: "FAVORITES", component: WordpressFavorites, icon: "bookmarks" },
      {
        title: "Facebook Connect",
        component: FacebookConnectComponent,
        icon: "logo-facebook"
      }
    ];
    this.wordpressMenusNavigation = config.wordpressMenusNavigation;
    (this.activePage = this.pagesleft[0]),
      this.pagesleftbottom[0],
      this.pagesleftcenter[0],
      this.pagesleftfooter[0],
      this.pagesright[0],
      this.pagesrightfooter[0];
  }

  ngOnInit() {
    this.animator.setType("fadeInUp").show(this.elementRef.nativeElement);
  }

  initializeApp() {
    //        platform.ready().then(() => {
    //   statusBar.styleDefault();
    //   let splash = modalCtrl.create(Splash);
    //   splash.present();
    //});
    this.menurightPage = FeedCategoryComponent;
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleBlackTranslucent();
      this.statusBar.backgroundColorByHexString("#005397");
      this.initPushNotification();
      //this.getFeeds();
      //this.getCategories();
      // this.platform.resume.subscribe(() => {
      //   handleBranch();
      // });
      // // Branch initialization
      // const handleBranch = () => {
      //   // only on devices
      //   if (!this.platform.is("cordova")) {
      //     return;
      //   }
      //   const Branch = window["Branch"];
      //   Branch.initSession(data => {
      //     if (data["+clicked_branch_link"]) {
      //       // read deep link data on click
      //       alert("Deep Link Data: " + JSON.stringify(data));
      //     }
      //   });
      // };
      // handleBranch();
      //      this.statusBar.hide();
      //this.splashScreen.hide();
      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
      // var notificationOpenedCallback = function(jsonData) {
      //   console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
      // };
      // window["plugins"].OneSignal
      //   .startInit("6a5ed52b-2c28-4d8d-9926-5d559837a95d", "645777369391")
      //   .handleNotificationOpened(notificationOpenedCallback)
      //   .endInit();
    });
  }
  checkActivePage(page) {
    return page == this.activePage;
  }
  openPage(page) {
    this.activePage = page;
    this.menuController.close().then(() => {
      this.nav.setRoot(page.component);
    });
  }
  pushPage(page) {
    this.menuController.close().then(() => {
      this.nav.push(page.component);
      this.activePage = page;
    });
  }
  openPageStammtische(page) {
    this.activePage = page;
    this.nav.setRoot(StammtischeComponent).then(() => {
      this.menuController.close();
    });
  }
  openTutorial() {
    this.nav.setRoot(TabsComponent);
  }
  openPageWordpress(page) {
    this.menuController.close();
    this.nav.push(WordpressPageDownloads, {
      page: page
    });
  }
  loadPost(post) {
    this.nav.push(WordpressPost, {
      post: post
    });
  }

  initPushNotification() {
    const options: PushOptions = {
      android: {
        senderID: "645777369391"
      }
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on("registration").subscribe((data: any) => {
      console.log("device token:", data.registrationId);

      let alert = this.alertCtrl.create({
        title: "device token",
        subTitle: data.registrationId,
        buttons: ["OK"]
      });
      alert.present();
    });
    pushObject.on("notification").subscribe((data: any) => {
      console.log("message", data.message);
      if (data.additionalData.foreground) {
        let confirmAlert = this.alertCtrl.create({
          title: "New Notification",
          message: data.message,
          buttons: [
            {
              text: "Ignore",
              role: "cancel"
            },
            {
              text: "View",
              handler: () => {
                //TODO: Your logic here
              }
            }
          ]
        });
        confirmAlert.present();
      } else {
        let alert = this.alertCtrl.create({
          title: "clicked on",
          subTitle: "you clicked on the notification!",
          buttons: ["OK"]
        });
        alert.present();
        console.log("Push notification clicked");
      }
    });
    pushObject
      .on("error")
      .subscribe(error => console.error("Error with Push plugin", error));
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
