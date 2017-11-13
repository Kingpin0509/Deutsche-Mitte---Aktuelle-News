webpackJsonp([0],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_wordpress_posts_home_wordpress_posts_home_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtube_youtube_channel_youtube_channel_component__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { WordpressFavorites } from "../../wordpress/wordpress-favorites/wordpress-favorites.component";

var TabsComponent = (function () {
    function TabsComponent() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__wordpress_wordpress_posts_home_wordpress_posts_home_component__["a" /* WordpressPostsHome */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__youtube_youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */];
        /*   tab3Root: any = WordpressFavorites;
          favoritePosts = [];
          constructor(private storage: Storage) {}
          ionViewWillEnter() {
            this.getPosts();
          }
          getPosts() {
            this.storage.get("wordpress.favorite").then(data => {
              if (data) {
                this.favoritePosts = JSON.parse(data);
              }
            });
          } */
    }
    return TabsComponent;
}());
TabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\tabs\tabs-component\tabs.html"*/'<ion-tabs tabsHideOnSubPages="true">\n\n  <ion-tab [root]="tab1Root" tabTitle="{{\'POSTS\' | translate}}" tabIcon="paper"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="{{\'YOUTUBE_VIDEOS\' | translate}}" tabIcon="logo-youtube"></ion-tab>\n\n  <!--   <ion-tab [root]="tab3Root" tabTitle="{{\'FAVORITES\' | translate}}" tabBadge="({{favoritePosts.length}})" tabBadgeStyle="danger"\n\n    tabIcon="thumbs-up"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="{{\'FAVORITES\' | translate}}" tabBadge="({{favoritePosts.length}})" tabBadgeStyle="danger"\n\n    tabIcon="thumbs-up"></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\tabs\tabs-component\tabs.html"*/
    })
], TabsComponent);

//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressMenus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_menu_wordpress_menu_component__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressMenus = (function () {
    function WordpressMenus(navParams, wordpressService, navController, loadingController, storage) {
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.navController = navController;
        this.loadingController = loadingController;
        this.storage = storage;
    }
    WordpressMenus.prototype.ngOnInit = function () {
        this.getMenus();
    };
    WordpressMenus.prototype.getMenus = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.wordpressService.getMenus().subscribe(function (result) {
            _this.menus = result;
            loader.dismiss();
        });
    };
    WordpressMenus.prototype.loadMenu = function (menu) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__wordpress_menu_wordpress_menu_component__["a" /* WordpressMenu */], {
            title: menu.name,
            id: menu.ID
        });
    };
    return WordpressMenus;
}());
WordpressMenus = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-menus\wordpress-menus.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>{{\'MENUS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let menu of menus" text-wrap (click)="loadMenu(menu)">\n      {{menu.name}}\n      <ion-icon name="more" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-menus\wordpress-menus.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], WordpressMenus);

//# sourceMappingURL=wordpress-menus.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressFavorites; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_post_wordpress_post_component__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordpressFavorites = (function () {
    function WordpressFavorites(navParams, navController, storage) {
        this.navParams = navParams;
        this.navController = navController;
        this.storage = storage;
        this.hideSearchbar = true;
        this.favoritePosts = [];
    }
    WordpressFavorites.prototype.ionViewWillEnter = function () {
        this.getPosts();
    };
    WordpressFavorites.prototype.getPosts = function () {
        var _this = this;
        this.storage.get("wordpress.favorite").then(function (data) {
            if (data) {
                _this.favoritePosts = JSON.parse(data);
            }
        });
    };
    WordpressFavorites.prototype.loadPost = function (post) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__wordpress_post_wordpress_post_component__["a" /* WordpressPost */], {
            post: post
        });
    };
    WordpressFavorites.prototype.removeFavoritePost = function (post) {
        var index = this.favoritePosts.findIndex(function (item) { return item.id === post.id; });
        this.favoritePosts.splice(index, 1);
        this.storage.set("wordpress.favorite", JSON.stringify(this.favoritePosts));
    };
    WordpressFavorites.prototype.removeAllFavoritePosts = function () {
        this.favoritePosts = [];
        this.storage.remove("wordpress.favorite");
    };
    return WordpressFavorites;
}());
WordpressFavorites = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-favorites\wordpress-favorites.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button icon-only menuToggle="left" >\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title class="bounce-top">{{\'FAVORITES\' | translate}} ({{favoritePosts.length}})</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="removeAllFavoritePosts()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n    <button ion-button right icon-only menuToggle="right">\n        <ion-icon name="more"></ion-icon>\n      </button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let post of favoritePosts">\n      <ion-item (tap)="loadPost(post)">\n        {{post.title.rendered}}\n        <button ion-button item-right outline>{{\'READ\' | translate}}</button>\n      </ion-item>\n      <ion-item-options>\n        <button primary (tap)="removeFavoritePost(post)">{{\'REMOVE\' | translate}}</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-favorites\wordpress-favorites.html"*/,
        providers: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], WordpressFavorites);

//# sourceMappingURL=wordpress-favorites.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feeds_feeds_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedCategoryComponent = (function () {
    function FeedCategoryComponent(feedService, navParams, navController, loadingController) {
        this.feedService = feedService;
        this.navParams = navParams;
        this.navController = navController;
        this.loadingController = loadingController;
        this.category = navParams.get("category");
        if (!this.category) {
            this.getCategory();
        }
    }
    FeedCategoryComponent.prototype.getCategory = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte warten"
        });
        loader.present();
        this.feedService.getCategory().subscribe(function (result) {
            _this.category = result;
            loader.dismiss();
        });
    };
    FeedCategoryComponent.prototype.loadFeeds = function (feedUrl) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__feeds_feeds_component__["a" /* FeedsComponent */], {
            feedUrl: feedUrl
        });
    };
    return FeedCategoryComponent;
}());
FeedCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feed-category\feed-category.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="category">{{category.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="category">\n  <section padding>\n    <h2>{{category.title}}</h2>\n    <p>{{category.description}}</p>\n  </section>\n  <ion-list>\n    <ion-item *ngFor="let item of category.items" (click)="loadFeeds(item.url)">\n      <h2>{{item.title}}</h2>\n      <p>{{item.description}}</p>\n      <button ion-button item-right outline>Read</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feed-category\feed-category.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], FeedCategoryComponent);

//# sourceMappingURL=feed-category.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedService = (function () {
    function FeedService(http, config) {
        this.http = http;
        this.config = config;
    }
    FeedService.prototype.getCategories = function () {
        var url = this.config.feedsUrl;
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    FeedService.prototype.getCategory = function () {
        var url = this.config.feedsCategoryUrl;
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    FeedService.prototype.getFeeds = function (source) {
        var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from xml where url ="' +
            encodeURIComponent(source) +
            '"&format=json';
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    return FeedService;
}());
FeedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */]])
], FeedService);

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_translate__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_truncate_pipe__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_trim_html_pipe__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_config__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { EmailComposer } from '@ionic-native/email-composer';




function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["d" /* TranslateStaticLoader */](http, "./assets/translations", ".json");
}
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_12__pipes_truncate_pipe__["a" /* TruncatePipe */], __WEBPACK_IMPORTED_MODULE_13__pipes_trim_html_pipe__["a" /* TrimHtmlPipe */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["a" /* TranslateLoader */],
                useFactory: createTranslateLoader,
                deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
            })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_translate__["b" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_truncate_pipe__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_trim_html_pipe__["a" /* TrimHtmlPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
            // BarcodeScanner,
            // EmailComposer,
            __WEBPACK_IMPORTED_MODULE_14__app_config__["a" /* Config */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordpressService = (function () {
    function WordpressService(http, config) {
        this.http = http;
        this.config = config;
    }
    WordpressService.prototype.login = function (data) {
        var url = this.config.wordpressApiUrl + "/jwt-auth/v1/token";
        return this.http.post(url, data).map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPosts = function (query) {
        query = this.transformRequest(query);
        var url = this.config.wordpressApiUrl + ("/wp/v2/posts?" + query + "&_embed");
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPost = function (id) {
        return this.http
            .get(this.config.wordpressApiUrl + ("/wp/v2/posts/" + id + "?_embed"))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getMedia = function (id) {
        return this.http
            .get(this.config.wordpressApiUrl + ("/wp/v2/media/" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getCategories = function () {
        return this.http
            .get(this.config.wordpressApiUrl + "/wp/v2/categories?per_page=35")
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getTags = function () {
        return this.http
            .get(this.config.wordpressApiUrl + "/wp/v2/tags?per_page=100")
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPages = function () {
        return this.http
            .get(this.config.wordpressApiUrl + "/wp/v2/pages?per_page=50")
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getPage = function (id) {
        return this.http
            .get(this.config.wordpressApiUrl + ("/wp/v2/pages/" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getMenus = function () {
        return this.http
            .get(this.config.wordpressApiUrl + "/wp-api-menus/v2/menus")
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.getMenu = function (id) {
        return this.http
            .get(this.config.wordpressApiUrl + ("/wp-api-menus/v2/menus/" + id))
            .map(function (result) {
            return result.json();
        });
    };
    WordpressService.prototype.transformRequest = function (obj) {
        var p, str;
        str = [];
        for (p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };
    return WordpressService;
}());
WordpressService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */]])
], WordpressService);

//# sourceMappingURL=wordpress.service.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs_component_tabs_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlidesComponent = (function () {
    function SlidesComponent(nav, menu, alertCtrl, storage) {
        this.nav = nav;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.showSkip = true;
    }
    SlidesComponent.prototype.openPage = function () {
        var _this = this;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs_component_tabs_component__["a" /* TabsComponent */]).then(function () {
            _this.storage.set("hasSeenTutorial", "true");
        });
    };
    SlidesComponent.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Intro erneut anzeigen",
            message: "Das Intro wird beim nächsten Start ausgeblendet. Unter Einstellungen kann es erneut aktiviert werden.",
            buttons: [
                {
                    text: "Weiter",
                    handler: function () {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs_component_tabs_component__["a" /* TabsComponent */]).then(function () {
                            _this.storage.set("hasSeenTutorial", "true");
                            console.log("Agree clicked");
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    return SlidesComponent;
}());
SlidesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\slides\slides-component\slides.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="bounce-top">Wilkommen</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="tutorial-page">\n  <ion-slides pager="true" zoom="true" paginationType="progress" effect="slide">\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button block color="dark" (click)="showConfirm()">Überspringen</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class="slide-in-blurred-top">\n        <img src="assets/img/slidebox-img-1o.png" class="slide-image" />\n      </div>\n      <div class="scale-up-hor-center">\n        <img src="assets/img/slidebox-img-1u.png" class="slide-image" />\n      </div>\n      <h2 class="slide-title tracking-in-contract">Herzlich Willkommen</h2>\n      <p class="tracking-in-contract">Die Deutsche Mitte und deren Ziele sind mehr als eine politische Partei. Es ist eine Bewegung von Menschen für Menschen,\n        die Missstände beseitigen und die Welt zu einer besseren machen wollen. Ethik wird hier als oberstes Gebot gefordert.</p>\n      <h3 class="tracking-in-contract">-DEUTSCHE MITTE-</h3>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button block color="dark" (click)="showConfirm()">Überspringen</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class="slide-in-blurred-top">\n        <img src="assets/img/ica-slidebox-img-3.png" class="slide-image" />\n      </div>\n      <h2 class="slide-title tracking-in-contract">Das Mäuseloch ist ein sehr beliebter Ort.</h2>\n      <p class="tracking-in-contract">Dort tummelt sich gut und gern die breite Masse.</p>\n      <h3 class="tracking-in-contract">Kommt raus aus dem Mauseloch, selbstbewusst, und bezieht Stellung!</h3>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button block color="dark" (click)="showConfirm()">Überspringen</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class="slide-in-blurred-top">\n        <img src="assets/img/slidebox-img-4u.png" class="slide-image" />\n      </div>\n      <!-- <div class="scale-up-hor-center">\n        <img src="assets/img/slidebox-img-4o.png" class="slide-image" />\n      </div> -->\n      <h2 class="slide-title tracking-in-contract">Zum kennenlernen</h2>\n      <p class="tracking-in-contract">Lernen sie uns persönlich bei unseren deutschlandweiten Stammtischtreffen kennen. Oder besuchen sie unseren Online-Stammtisch\n        unter:</p>\n      <h3 class="tracking-in-contract">http://dm-stammtisch.de</h3>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button block color="dark" (click)="showConfirm()">Überspringen</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <div class="slide-in-blurred-top">\n        <img src="assets/img/ica-slidebox-img-3.png" class="slide-image" />\n      </div>\n      <h2 class="slide-title tracking-in-contract">Wir haben nur diese eine Chance</h2>\n      <p class="tracking-in-contract">Machen Sie mit !</p>\n      <h3 class="tracking-in-contract">Kommen Sie in die Deutsche Mitte</h3>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-5.png" class="slide-image" />\n      <h2 class="slide-title">Alles klar?</h2>\n      <p>Dann lassen sie uns gemeinsam starten. Wir haben nur noch diese eine Chance! Nutzen wir sie, jetzt!</p>\n      <button ion-button large clear icon-right (click)="showConfirm()"><h3 class="tracking-in-contract">Start\n        <ion-icon name="arrow-forward"></ion-icon></h3>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\slides\slides-component\slides.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], SlidesComponent);

//# sourceMappingURL=slides.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressPostsHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_post_wordpress_post_component__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressPostsHome = (function () {
    function WordpressPostsHome(navParams, wordpressService, navController, loadingController, toastController, storage) {
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.navController = navController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.storage = storage;
    }
    WordpressPostsHome.prototype.share = function (slidingItem) {
        slidingItem.close();
    };
    WordpressPostsHome.prototype.ngOnInit = function () {
        var _this = this;
        this.category = this.navParams.get("category");
        this.tag = this.navParams.get("tag");
        this.author = this.navParams.get("author");
        this.hideSearchbar = true;
        this.search = "";
        this.favoritePosts = [];
        this.storage.get("wordpress.favorite").then(function (data) {
            if (data) {
                _this.favoritePosts = JSON.parse(data);
            }
        });
        this.getPosts();
    };
    WordpressPostsHome.prototype.getPosts = function () {
        var _this = this;
        this.pageCount = 1;
        var query = this.createQuery();
        // let loader = this.loadingController.create({
        //   spinner: "bubbles",
        //   cssClass: `wordpresspostshome`,
        //   content: `Bitte Warten...`,
        //   duration: 1000
        // });
        //loader.present();
        this.wordpressService.getPosts(query).subscribe(function (result) {
            //loader.dismiss();
            _this.posts = result;
        });
    };
    WordpressPostsHome.prototype.getAuthorPosts = function (author) {
        this.author = author;
        this.getPosts();
    };
    WordpressPostsHome.prototype.searchPosts = function () {
        this.getPosts();
    };
    WordpressPostsHome.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.pageCount++;
        var query = this.createQuery();
        var loader = this.loadingController.create({
            content: "Bitte warten..."
        });
        var toast = this.toastController.create({
            message: "Keine weiteren Beiträge.",
            duration: 2000
        });
        loader.present();
        this.wordpressService.getPosts(query).subscribe(function (result) {
            infiniteScroll.complete();
            if (result.length < 1) {
                infiniteScroll.enable(false);
                toast.present();
            }
            else {
                _this.posts = _this.posts.concat(result);
            }
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressPostsHome.prototype.loadPost = function (post) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__wordpress_post_wordpress_post_component__["a" /* WordpressPost */], {
            'post': post
        });
    };
    WordpressPostsHome.prototype.favoritePost = function (post) {
        var newPost = true;
        var message;
        this.favoritePosts.forEach(function (favPost) {
            if (JSON.stringify(favPost) === JSON.stringify(post)) {
                newPost = false;
            }
        });
        if (newPost) {
            this.favoritePosts.push(post);
            this.storage.set("wordpress.favorite", JSON.stringify(this.favoritePosts));
            message = "Beitrag wurde zu deinen Favoriten hinzugefügt";
        }
        else {
            message = "Beitrag wurde bereits zu deinen Favoriten hinzugefügt";
        }
        var toast = this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    WordpressPostsHome.prototype.toggleSearchbar = function () {
        this.hideSearchbar = !this.hideSearchbar;
    };
    WordpressPostsHome.prototype.createQuery = function () {
        var query = {};
        query["page"] = this.pageCount;
        if (this.search) {
            query["search"] = this.search;
        }
        if (this.category) {
            query["categories"] = this.category.id;
        }
        if (this.tag) {
            query["tags"] = this.tag.id;
        }
        if (this.author) {
            query["author"] = this.author;
        }
        return query;
    };
    return WordpressPostsHome;
}());
WordpressPostsHome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-posts-home\wordpress-posts-home.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title class="bounce-top">{{\'POSTS\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n        <ion-icon name=\'more\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let post of posts" class="bordered slide-in-bck-bottom">\n    <ion-list>\n      <ion-card-content>\n        <ion-list-header (tap)="loadPost(post)" class="header">\n          <ion-item>\n            <h2 class="header" item-start text-wrap [innerHTML]="post.title.rendered"></h2>\n            <ion-note class="date" text-wrap item-end>{{post.date | date:\'dd/MM\'}}</ion-note>\n          </ion-item>\n        </ion-list-header>\n        <ion-item-sliding #slidingItem>\n          <ion-item class="content" (tap)="loadPost(post)" text-wrap>{{post.content.rendered | trimHTML | truncate: 200 }}</ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="primary" (click)="share(slidingItem)" (tap)="favoritePost(post)">\n              <ion-icon name="thumbs-up"></ion-icon>\n              {{ \'FAVORITE\' | translate }}\n            </button>\n            <button ion-button color="secondary" (tap)="loadPost(post)">\n              <ion-icon name="book"></ion-icon>\n              {{ \'READ\' | translate }}\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n        <!-- <p>\n          <button ion-button small margin outline color="primary" (tap)="favoritePost(post)" icon-start>\n              <ion-icon name=\'thumbs-up\'></ion-icon>\n              {{ \'FAVORITE\' | translate }}\n            </button>\n          <button ion-button small margin outline color="secondary" (tap)="loadPost(post)" icon-end>\n                {{ \'READ\' | translate }}\n                <ion-icon name=\'book\'></ion-icon>\n              </button>\n        </p> -->\n      </ion-card-content>\n    </ion-list>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-posts-home\wordpress-posts-home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], WordpressPostsHome);

//# sourceMappingURL=wordpress-posts-home.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeService = (function () {
    function YoutubeService(http, config) {
        this.http = http;
        this.config = config;
        this.youtubeKey = config.youtubeKey;
        this.apiUrl = config.youtubeApiUrl;
        this.username = config.youtubeUsername;
        this.channelId = config.youtubeChannelId;
        this.results = config.youtubeResults;
        this.videosUrl =
            this.apiUrl +
                "playlistItems?part=snippet&key=" +
                this.youtubeKey +
                "&order=date&maxResults=" +
                this.results;
        this.playlistsUrl =
            this.apiUrl + "channels?part=contentDetails&key=" + this.youtubeKey;
        this.channelsUrl =
            this.apiUrl +
                "search?part=snippet&key=" +
                this.youtubeKey +
                "&order=date&maxResults=" +
                this.results +
                "&channelId=" +
                this.channelId;
    }
    YoutubeService.prototype.getPlaylistId = function () {
        var url = this.playlistsUrl + "&forUsername=" + this.username;
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    YoutubeService.prototype.getVideos = function (playlistId) {
        var url = this.videosUrl + "&playlistId=" + playlistId;
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    YoutubeService.prototype.getChannel = function () {
        var url = this.channelsUrl;
        return this.http.get(url).map(function (result) {
            return result.json();
        });
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* Config */]])
], YoutubeService);

//# sourceMappingURL=youtube.service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeChannelVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeChannelVideoComponent = (function () {
    function YoutubeChannelVideoComponent(navParams, sanitizer, socialSharing) {
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        this.video = navParams.get("video");
        this.prepareResource();
    }
    YoutubeChannelVideoComponent.prototype.prepareResource = function () {
        var url = "http://www.youtube.com/embed/" + this.video.id.videoId;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeChannelVideoComponent.prototype.shareVideo = function () {
        var _this = this;
        var subject = this.video.snippet.title;
        var message = this.video.snippet.description;
        message = message.replace(/(<([^>]+)>)/gi, "");
        var url = "http://www.youtube.com/embed/" + this.video.id.videoId;
        setTimeout(function () { return _this.socialSharing.share(message, subject, "", url); }, 0);
    };
    return YoutubeChannelVideoComponent;
}());
YoutubeChannelVideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-channel-video\youtube-channel-video.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{video.snippet.title}}</ion-title>\n    <ion-buttons end>\n      <button (click)="shareVideo()" ion-button icon-only>\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="youtube-video">\n  <iframe *ngIf="video.id.videoId" [src]="videoUrl" frameborder="0" allowfullscreen="true"></iframe>\n  <div padding>\n    <h2 class="header">{{video.snippet.title}}</h2>\n    <p>Veröffentlich von\n      <strong>{{video.snippet.channelTitle}}</strong>\n    </p>\n    <p class="content" [innerHtml]="video.snippet.description"></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-channel-video\youtube-channel-video.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], YoutubeChannelVideoComponent);

//# sourceMappingURL=youtube-channel-video.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_menu_item_wordpress_menu_item_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_post_wordpress_post_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wordpress_page_wordpress_page_component__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WordpressMenu = (function () {
    function WordpressMenu(navParams, wordpressService, navController, loadingController, events, iab) {
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.navController = navController;
        this.loadingController = loadingController;
        this.events = events;
        this.iab = iab;
    }
    WordpressMenu.prototype.ngOnInit = function () {
        this.title = this.navParams.get("title");
        this.id = this.navParams.get("id");
        this.getMenu(this.id);
    };
    WordpressMenu.prototype.getMenu = function (id) {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.wordpressService.getMenu(id).subscribe(function (result) {
            _this.menu = result.items;
            loader.dismiss();
        });
    };
    WordpressMenu.prototype.loadMenuItem = function (item) {
        if (item.children) {
            this.navController.push(__WEBPACK_IMPORTED_MODULE_4__wordpress_menu_item_wordpress_menu_item_component__["a" /* WordpressMenuItem */], {
                title: item.title,
                item: item.children
            });
        }
        else {
            this.previewMenuItem(item);
        }
    };
    WordpressMenu.prototype.previewMenuItem = function (item) {
        var menuObject;
        // InApp Support Types: post, page, category
        if (item.object === "category") {
            var category = void 0;
            category = {};
            category.id = item.object_id;
            category.name = item.title;
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_5__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
                params: {
                    category: category
                }
            };
        }
        else if (item.object === "post_tag") {
            var tag = void 0;
            tag = {};
            tag.id = item.object_id;
            tag.name = item.title;
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_5__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
                params: {
                    tag: tag
                }
            };
        }
        else if (item.object === "post") {
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_6__wordpress_post_wordpress_post_component__["a" /* WordpressPost */],
                params: {
                    id: item.object_id
                }
            };
        }
        else if (item.object === "page") {
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_7__wordpress_page_wordpress_page_component__["a" /* WordpressPage */],
                params: {
                    id: item.object_id
                }
            };
        }
        else {
            var browser = this.iab.create(item.url, "_blank");
            browser.show();
        }
        this.events.publish("navigationEvent", menuObject);
    };
    return WordpressMenu;
}());
WordpressMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-menu\wordpress-menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of menu" text-wrap (click)="loadMenuItem(item)">\n      {{item.title}}\n      <ion-icon *ngIf="item.children" name="more" item-right></ion-icon>\n      <ion-icon *ngIf="!item.children" name="link" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-menu\wordpress-menu.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], WordpressMenu);

//# sourceMappingURL=wordpress-menu.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressMenuItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_post_wordpress_post_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_page_wordpress_page_component__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WordpressMenuItem = WordpressMenuItem_1 = (function () {
    function WordpressMenuItem(navParams, navController, loadingController, events, iab) {
        this.navParams = navParams;
        this.navController = navController;
        this.loadingController = loadingController;
        this.events = events;
        this.iab = iab;
    }
    WordpressMenuItem.prototype.ngOnInit = function () {
        this.title = this.navParams.get("title");
        this.menu = this.navParams.get("item");
    };
    WordpressMenuItem.prototype.loadMenuItem = function (item) {
        if (item.children) {
            this.navController.push(WordpressMenuItem_1, {
                title: item.title,
                item: item.children
            });
        }
        else {
            this.previewMenuItem(item);
        }
    };
    WordpressMenuItem.prototype.previewMenuItem = function (item) {
        var menuObject;
        // InApp Support Types: post, page, category
        if (item.object === "category") {
            var category = void 0;
            category = {};
            category.id = item.object_id;
            category.name = item.title;
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_3__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
                params: {
                    category: category
                }
            };
        }
        else if (item.object === "post_tag") {
            var tag = void 0;
            tag = {};
            tag.id = item.object_id;
            tag.name = item.title;
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_3__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
                params: {
                    tag: tag
                }
            };
        }
        else if (item.object === "post") {
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_4__wordpress_post_wordpress_post_component__["a" /* WordpressPost */],
                params: {
                    id: item.object_id
                }
            };
        }
        else if (item.object === "page") {
            menuObject = {
                component: __WEBPACK_IMPORTED_MODULE_5__wordpress_page_wordpress_page_component__["a" /* WordpressPage */],
                params: {
                    id: item.object_id
                }
            };
        }
        else {
            var browser = this.iab.create(item.url, "_blank");
            browser.show();
        }
        this.events.publish("navigationEvent", menuObject);
    };
    return WordpressMenuItem;
}());
WordpressMenuItem = WordpressMenuItem_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-menu-item\wordpress-menu-item.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of menu" text-wrap (click)="loadMenuItem(item)">\n      {{item.title}}\n      <ion-icon *ngIf="item.children" name="more" item-right></ion-icon>\n      <ion-icon *ngIf="!item.children" name="link" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-menu-item\wordpress-menu-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], WordpressMenuItem);

var WordpressMenuItem_1;
//# sourceMappingURL=wordpress-menu-item.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressPageDownloads; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressPageDownloads = (function () {
    function WordpressPageDownloads(navParams, wordpressService, loadingController, iab, socialSharing) {
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.loadingController = loadingController;
        this.iab = iab;
        this.socialSharing = socialSharing;
        if (navParams.get("page")) {
            this.page = navParams.get("page");
        }
        if (navParams.get("id")) {
            this.getPage(navParams.get("id"));
        }
    }
    WordpressPageDownloads.prototype.getPage = function (id) {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.wordpressService.getPage(id).subscribe(function (result) {
            _this.page = result;
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressPageDownloads.prototype.previewPage = function () {
        var browser = this.iab.create(this.page.link, "_blank");
        browser.show();
    };
    WordpressPageDownloads.prototype.sharePage = function () {
        var subject = this.page.title.rendered;
        var message = this.page.content.rendered;
        message = message.replace(/(<([^>]+)>)/gi, "");
        var url = this.page.link;
        this.socialSharing.share(message, subject, "", url);
    };
    return WordpressPageDownloads;
}());
WordpressPageDownloads = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-page-downloads\wordpress-page-downloads.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title *ngIf="page">{{page.title.rendered}}</ion-title>\n    <ion-buttons end>\n      <button (tap)="sharePage()" ion-button icon-only>\n	        <ion-icon name="share"></ion-icon>\n	      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <section *ngIf="page" padding [innerHTML]="page.content.rendered"></section>\n  <button ion-button full (click)=previewPage()>{{\'OPEN\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-page-downloads\wordpress-page-downloads.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], WordpressPageDownloads);

//# sourceMappingURL=wordpress-page-downloads.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aussenpolitik_component_aussenpolitik_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__innenpolitik_component_innenpolitik_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finanzen_component_finanzen_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wirtschaft_component_wirtschaft_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__arbeit_component_arbeit_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__verteidigung_component_verteidigung_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bildung_component_bildung_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__familie_component_familie_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__umwelt_component_umwelt_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nahrung_component_nahrung_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gesundheit_component_gesundheit_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__verkehr_component_verkehr_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__entwicklung_component_entwicklung_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__justiz_component_justiz_component__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AboutComponent = (function () {
    function AboutComponent(navCtrl, alerCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.modalCtrl = modalCtrl;
    }
    AboutComponent.prototype.openAussenpolitik = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__aussenpolitik_component_aussenpolitik_component__["a" /* AussenpolitikComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openInnenpolitik = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__innenpolitik_component_innenpolitik_component__["a" /* InnenpolitikComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openFinanzen = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__finanzen_component_finanzen_component__["a" /* FinanzenComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openWirtschaft = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__wirtschaft_component_wirtschaft_component__["a" /* WirtschaftComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openArbeit = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__arbeit_component_arbeit_component__["a" /* ArbeitComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openVerteidigung = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__verteidigung_component_verteidigung_component__["a" /* VerteidigungComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openBildung = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__bildung_component_bildung_component__["a" /* BildungComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openFamilie = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__familie_component_familie_component__["a" /* FamilieComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openUmwelt = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__umwelt_component_umwelt_component__["a" /* UmweltComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openNahrung = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__nahrung_component_nahrung_component__["a" /* NahrungComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openGesundheit = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__gesundheit_component_gesundheit_component__["a" /* GesundheitComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openVerkehr = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__verkehr_component_verkehr_component__["a" /* VerkehrComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openEntwicklung = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__entwicklung_component_entwicklung_component__["a" /* EntwicklungComponent */]);
        myModal.present();
    };
    AboutComponent.prototype.openJustiz = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__justiz_component_justiz_component__["a" /* JustizComponent */]);
        myModal.present();
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-about",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\about-component\about.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{\'ABOUT\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n        <ion-icon name=\'more\'></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <h1 class="header" text-wrap text-center>Die Deutsche Mitte steht für ethische Politik im Sinne der Bewahrung der Schöpfung: mit Herz, Augenmaß und Vernunft</h1>\n  <p padding-horizontal text-justify><i padding-horizontal>Politik soll fragen: Was ist gut für alle? Für Deutschland, für Europa, für die Welt. Für Mensch und Natur. Für ein glückliches und erfolgreiches Miteinander aller in Frieden, Gerechtigkeit und fairem Interessenausgleich. Wir sind alle miteinander verbunden!</i></p>\n  <h2 class="header" text-center>Aufrichtige Wahlversprechen: Regieren heißt dienen – nicht herrschen</h2>\n  <ion-card>\n    <ion-card-content>\n      <p text-justify>Wir halten was wir sagen – auch nach der Wahl. Deshalb ordnen wir als einzige Partei unser Programm direkt nach Ministerien.\n        So gilt: <b>Parteiprogramm = Wahlprogramm = Regierungsprogramm</b>. Und für mögliche Koalitionen wird darüber nicht\n        verhandelt: Allenfalls führen wir „Ressortabgrenzungsgespräche“ – denn in „unseren“ Ministerien werden wir unser\n        Programm exakt umsetzen. Wir machen Politik für die große Mehrheit der Bevölkerung, die in allen Bereichen mit Recht\n        die Regierungspolitik kritisiert. Wir fordern freie Meinungsäußerung und Berichterstattung!</p>\n      <p text-justify>Wir drängen das globale Finanzkartell zurück – fahren schrittweise, voraussichtlich binnen vier Jahren, Zinsen herunter\n        und bringen die Geldschöpfung unter öffentliche Kontrolle. Spekulationsblasen dulden wir nicht, Nahrungsmittel und\n        Wasser sind Menschenrecht. Wir beenden jede deutsche Beteiligung an BundeswehrKampfeinsätzen außerhalb des Nato-Verteidigungsgebietes.</p>\n      <p text-justify>Deutschland verdient einen Friedensvertrag, endlich volle Souveränität und eine umfassende Verfassungsreform, vor allem\n        für mehr Bürgerrechte, die Selbstbestimmung und Selbstverantwortung des Menschen auf allen Ebenen ermöglichen – und\n        den Überwachungsstaat beenden.</p>\n      <p text-justify>Deutschland ist ein christlich geprägtes Land – die Deutsche Mitte eine säkulare Partei; wir fordern die strikte Trennung\n        von Staat und Kirche.</p>\n    </ion-card-content>\n  </ion-card>\n  <h3 class="header">Kurzprogramm der Deutschen Mitte 2017:</h3>\n  <ion-card padding>\n    <ion-card-content margin-horizontal>\n      <button ion-button block color="dark" (click)="openAussenpolitik()">\n          <h2 class="button">\n            <ion-icon padding-horizontal name="expand"></ion-icon>\n            Außenpolitik\n          </h2>\n        </button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Mit Augenmaß, gut abgestimmt mit Partnern und Freunden und ohne großen Wirbel verlässt Deutschland die Euro-Gruppe – nicht als erstes Land, um Missstimmung zu vermeiden, jedoch als zweites...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content margin-horizontal>\n      <button ion-button full color="dark" (click)="openInnenpolitik()">\n      <h2 class="button">\n        <ion-icon padding-horizontal name="download"></ion-icon>\n        Innenpolitik\n      </h2>\n      </button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Wir wollen mehr und besser bezahlte Polizisten, die wir persönlich kennen: als „Revierbeamte“ mit erhöhter Straßenpräsenz. Geheimdienste sollen besser und ehrlicher zum Wohl der Bevölkerung arbeiten...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openFinanzen()">\n      <h2 class="button"><ion-icon padding-horizontal name="cash"></ion-icon>Finanzen</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Banken werden ehrliche Dienstleister, Zockerei wird verboten, Zins und Zinseszins werden abgeschafft. Marode Banken werden vorübergehend verstaatlicht und teilweise in kontrollierten Konkurs gehen. Manager haften für Fehlverhalten...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openWirtschaft()">\n      <h2 class="button"><ion-icon padding-horizontal name="construct"></ion-icon>Wirtschaft und Technologie</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Wirtschaft dient allen Menschen, dies ist ebenfalls Aufgabe der Politik: Unternehmen, die sozial, ökologisch, menschenfreundlich und flexibel arbeiten (Gemeinwohlökonomie) erhalten finanzielle Erleichterungen...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openArbeit()">\n      <h2 class="button"><ion-icon padding-horizontal name="man"></ion-icon>Arbeit und Soziales</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Jeder arbeitsfähige Mensch geht einer Beschäftigung nach. In einer Vorphase vor Einführung des Bedingungslosen Grundeinkommens (BGE) steht das Solidarische Grundeinkommen (SGE)...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openVerteidigung()">\n      <h2 class="button"><ion-icon padding-horizontal name="jet"></ion-icon>Verteidigung</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Die neue Verteidigungsstrategie lautet: „Full Spectrum Defense“ – und stellt sicher, dass Deutschland auf jedem Gebiet – entweder eigenständig oder im Verbund mit anderen Nationen – abschreckend verteidigungsfähig wird...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openBildung()">\n      <h2 class="button"><ion-icon padding-horizontal name="flask"></ion-icon>Bildung und Forschung:</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Große Investitionen in Bildung und Forschung machen Deutschland wieder zur führenden Nation in diesem Bereich. Die elterliche Kindererziehung bis zum Erreichen des dritten Lebensjahres wird finanziell kräftig gefördert...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openFamilie()">\n      <h2 class="button"><ion-icon padding-horizontal name="contacts"></ion-icon>Familie, Senioren, Frauen und Jugend</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Großzügige Förderung von Familien mit Kindern, auch durch kostenlose Paar-, Eltern- und Familienberatung. 50% mehr Kindergeld, zusätzlich erhalten Eltern nach aktuellen Maßstäben 5.000 € für das erste Kind, je 10.000 € für jedes weitere Kind...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openUmwelt()">\n      <h2 class="button"><ion-icon padding-horizontal name="flash"></ion-icon>Umwelt, Naturschutz und Reaktorsicherheit</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Die Deutsche Mitte sieht den Menschen in der hohen Verantwortung, die natürlichen Grundlagen für alle Lebensformen zu bewahren. Darum erhalten Umwelt- und Naturschutz bedeutenden Vorrang...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openNahrung()">\n      <h2 class="button"><ion-icon padding-horizontal name="leaf"></ion-icon>Ernährung, Landwirtschaft und Verbraucherschutz</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Die Deutsche Mitte fordert das Recht auf natürlich gesunde Lebensmittel. Schrittweise Umstellung auf ökologische, pestizid- und gentechnikfreie Landwirtschaft (Mindeststandard: Bioland)...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openGesundheit()">\n      <h2 class="button"><ion-icon padding-horizontal name="medkit"></ion-icon>Gesundheit</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Die Deutsche Mitte strebt schrittweise eine kostenlose medizinische Grundversorgung für alle an. Wir stehen für ursachenbezogene ganzheitliche Heilkunde und natürliche Medizin, die sich am Menschen orientiert...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openVerkehr()">\n      <h2 class="button"><ion-icon padding-horizontal name="hammer"></ion-icon>Verkehr, Bau und Stadtentwicklung:</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Voll-Ausbau der Bahn zum großen LogistikDienstleister, keine Privatisierung, stattdessen Zusammenarbeit mit Privatfirmen, deutlich weniger und kleinere LKW auf den Straßen. Großprojekte mit enger Einbindung der Bevölkerung...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openEntwicklung()">\n      <h2 class="button"><ion-icon padding-horizontal name="open"></ion-icon>Wirtschaftliche Zusammenarbeit und Entwicklung</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Fairer Handel ohne Diktate aus IWF und Weltbank. Internationale Unterstützungsleistungen werden künftig neben bisherigen Verfahren zusätzlich in verantwortlichen Patenschaften organisiert...</i></b></ion-note>\n  </ion-card>\n  <ion-card padding>\n    <ion-card-content>\n      <button ion-button full color="dark" (click)="openJustiz()">\n      <h2 class="button"><ion-icon padding-horizontal name="archive"></ion-icon>Justiz</h2></button>\n    </ion-card-content>\n    <ion-note text-justify><b><i>Recht darf kein Privileg der Wohlhabenden oder Mächtigen sein. Gerechtigkeit soll vor Gericht siegen. Ausbau des Justizwesens, weniger machtpolitischer Einfluss, mehr richterliche Unabhängigkeit...</i></b></ion-note>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\about-component\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AussenpolitikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AussenpolitikComponent = (function () {
    function AussenpolitikComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    AussenpolitikComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AussenpolitikComponent;
}());
AussenpolitikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-aussenpolitik",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\aussenpolitik-component\aussenpolitik.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Aussenpolitik</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Aussenpolitik</h2>\n  </div>\n  <div>\n    <p>Mit Augenmaß, gut abgestimmt mit Partnern und Freunden und ohne großen Wirbel verlässt Deutschland die Euro-Gruppe –\n      nicht als erstes Land, um Missstimmung zu vermeiden, jedoch als zweites. Der Vertrag von Lissabon, über den die Bevölkerung\n      nicht abstimmen durfte, wird nachträglich einem Volksentscheid unterworfen und im Ablehnungsfalle selbstverständlich\n      aufgekündigt. Gleichzeitig legt die Bundesregierung abgesprochene Vorschläge für eine umfassende EU-Reform vor. Europa\n      wird gestärkt und deutlich demokratisiert, mit mehr Mitbestimmung durch die Euro-Völker, Wahl aller Gremien, Beendigung\n      der Entscheidungsmacht der jetzigen EUKommission. Notfalls kann Deutschland auch die EU verlassen. Die Deutsche Mitte\n      fördert die eigenständige Sanierungskraft hoch verschuldeter Euro-Länder. Zahlungen an verschuldete Euro-Länder erfolgen\n      nur noch gegen dreifache Sicherheitsleistung, ab Förderbeträgen von insgesamt mehr als 20% des betreffenden Bundeshaushalts\n      ausschließlich nach Zustimmung der eigenen und der Empfänger-Bevölkerung.</p>\n    <p>Mit der Förderung internationaler Gewerkschaftspolitik gehen wir auf die große Mehrzahl der Menschen in aller Welt zu.\n      Völkerrecht geht vor Handelsrecht. Darüber dürfen sich Handelsverträge nicht hinwegsetzen: Weg mit TTIP, CETA, TISA!</p>\n    <p>Die Deutsche Mitte tritt weltweit für gerechten Frieden ein. Ungerechte und sinnlose Sanktionen werden beendet. Keine\n      Abenteuer-Politik bei Regierungswechseln in anderen Ländern (Libyen, Syrien, Ukraine), grundsätzliche Beachtung der\n      Nichteinmischung in die inneren Angelegenheiten anderer Länder. Gerechten Frieden fördert die Deutsche Mitte auch in\n      Nahost, eine deutsche Staatsräson für die Sicherheit Israels lehnen wir ab. Grundsätzlich gilt für Palästina die Ein-Staaten-Lösung\n      nach südafrikanischem Vorbild und bei vollem Rückkehrrecht aller Palästinenser als erstrebenswert, damit wäre die Regierung\n      palästinensisch geprägt. Zwischenschritte wie die „Zwei-Staaten-Lösung“ werden selbstverständlich ebenfalls unterstützt.</p>\n    <p>Zur Friedenssicherung wird Deutschland unverzüglich seine Truppen aus der NatoStruktur so lange herausziehen, bis die\n      Nato sämtliche Einsätze außerhalb des NatoGebiets beendet hat. Sollte die Nato nicht binnen zwei Jahren wieder ein\n      reines Verteidigungsbündnis werden, muss der Nato-Austritt erfolgen. Deutsche Soldaten werden aus dem Nicht-Nato-Ausland\n      („out of area“) abgezogen und verbleiben fortan ausschließlich im Nato-Gebiet. Gleichzeitig werden schrittweise alle\n      ausländischen Truppen aus Deutschland abgezogen, einschließlich aller Waffen, insbesondere: Atomwaffen. Truppeneinsätze\n      benötigen künftig bessere Strategien. Wir sind und bleiben enge Freunde und Verbündete unserer EU-Nachbarn und Nato-Partner,\n      diese Beziehungen wollen wir vorrangig besonders pflegen, vor allem im Interesse der Völker – doch deutsche Außenpolitik\n      kann mehr als nur Nato-Bündnis- oder EU-Politik. Mit Russland und anderen Staaten oder Staatengruppen werden friedenswahrende\n      Rückversicherungsverträge abgeschlossen.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\aussenpolitik-component\aussenpolitik.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], AussenpolitikComponent);

//# sourceMappingURL=aussenpolitik.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnenpolitikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InnenpolitikComponent = (function () {
    function InnenpolitikComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    InnenpolitikComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return InnenpolitikComponent;
}());
InnenpolitikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-innenpolitik",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\innenpolitik-component\innenpolitik.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Innenpolitik</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Innenpolitik</h2>\n  </div>\n  <div>\n    <p>Wir wollen mehr und besser bezahlte Polizisten, die wir persönlich kennen: als „Revierbeamte“ mit erhöhter Straßenpräsenz.\n      Geheimdienste sollen besser und ehrlicher zum Wohl der Bevölkerung arbeiten, das allein sichert das Land.</p>\n    <p>Ein neues Ausländergesetz bringt klare Einwanderungsregeln mit niedrigen Obergrenzen! Massenzuwanderung unterbinden wir\n      an den Außengrenzen, vor allem mit Friedenspolitik sowie durch politische, wirtschaftliche und humanitäre Hilfe in\n      Ursprungs- und Erstaufnahmeländern. Rechtmäßige Einwanderer wollen wir besser behandeln und integrieren: schulen, in\n      Lohn und Brot bringen, schneller einbürgern. Migranten ohne Integrationsbereitschaft werden zurückgewiesen. Die Bildung\n      von Migrantenvierteln wird tatkräftig unterbunden. Null Toleranz bei rassistischen Übergriffen. Soweit Asylsuchende\n      in ihren Herkunftsländern eine akute Bedrohung ihrer Menschenrechte erleiden oder befürchten müssen, erhält die Bundesregierung\n      eine verbesserte Handlungsbasis. Kriminelle Banden werden wirksam bekämpft.</p>\n    <p>Mehr Volksinitiativen und Volksentscheide bei wichtigen Fragen in Bund und Land. Staatliches Entscheiden und Handeln\n      muss Internet-basiert transparent und viel besser öffentlich kontrollierbar werden! Den Überwachungsstaat werden wir\n      beenden – Spionage von außen nicht mehr dulden. Mehr soziale, ethische Sportförderung!</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\innenpolitik-component\innenpolitik.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], InnenpolitikComponent);

//# sourceMappingURL=innenpolitik.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanzenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FinanzenComponent = (function () {
    function FinanzenComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FinanzenComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FinanzenComponent;
}());
FinanzenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-finanzen",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\finanzen-component\finanzen.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Finanzen</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Finanzen</h2>\n  </div>\n  <div>\n    <p>Banken werden ehrliche Dienstleister, Zockerei wird verboten, Zins und Zinseszins werden abgeschafft. Marode Banken werden\n      vorübergehend verstaatlicht und teilweise in kontrollierten Konkurs gehen. Manager haften für Fehlverhalten, Betrug\n      wird strenger bestraft. Wir fordern die Trennung von Geschäfts- und Investmentbanken und eine Börsentransaktionssteuer,\n      um Großspekulanten einzubremsen. Diese Schritte werden international abgestimmt, durchgesetzt und eingeführt, genau\n      wie das Verbot von Spekulantentricks: Derivate, Leerverkäufe und Termingeschäfte. Künftig darf nie wieder eine nationale\n      Währung Weltleitwährung sein! Wir fordern stattdessen eine zusätzliche, fair und staatsunabhängig verwaltete weltweite\n      Ausgleichswährung. Steuern werden vereinfacht und auf lange Sicht zum Großteil abgeschafft. Auf dem Wege dahin motivieren\n      wir Superreiche, Mega-Erben und Großkonzerne, soziales Mäzenatentum stärker zu unterstützen. Verschwendung öffentlicher\n      Mittel wird strenger geahndet und wirkungsvoller vermieden.</p>\n    <p>Die Deutsche Mitte fordert den Erhalt des Bargeldes, bringt die D-Mark zurück und fördert alternative und regionale Währungen\n      ebenso wie Tauschringe.</p>\n    <p>Die „Monetative“ (nach Prof. Dr. Bernd Senf) verbietet Geldschöpfung durch Regierung oder private Einrichtungen und legt\n      dieses Privileg ausschließlich in die Hände einer reformierten und wirklich unabhängigen Bundesbank. Dieses Prinzip\n      ist eingebettet in das ebenfalls verfolgte „Viergliederungsprinzip“ (nach Prof. Dr. Johannes Heinrichs) und angelehnt\n      an das „Dreigliederungsprinzip“ (nach Dr. Rudolf Steiner).</p>\n    <p>Sämtliche tiefgreifende Reformen erfolgen ausschließlich in gründlicher und tatsächlich unabhängiger wissenschaftlicher\n      und praxisnaher Vorbereitung und Begleitung.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\finanzen-component\finanzen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], FinanzenComponent);

//# sourceMappingURL=finanzen.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WirtschaftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WirtschaftComponent = (function () {
    function WirtschaftComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    WirtschaftComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return WirtschaftComponent;
}());
WirtschaftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-wirtschaft",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\wirtschaft-component\wirtschaft.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Wirtschaft</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Wirtschaft und Technologie</h2>\n  </div>\n  <div>\n    <p>Wirtschaft dient allen Menschen, dies ist ebenfalls Aufgabe der Politik: Unternehmen, die sozial, ökologisch, menschenfreundlich\n      und flexibel arbeiten (Gemeinwohlökonomie) erhalten finanzielle Erleichterungen. Familienunternehmen, Genossenschaften\n      und Stiftungen sowie Mitarbeiterbeteiligung werden ebenso gefördert wie Solidität und Stabilität der Unternehmensfinanzen\n      – auch durch die Bildung stiller Reserven. Förderung lokaler Wirtschaft und handwerklicher Eigenproduktion. Förderung\n      von Open-Source-Ökonomie.</p>\n    <p>Geeignete, neue Technologien und Erfindungen werden gefördert und schneller in Produkte umgesetzt. Entsprechend zügig\n      erfolgt der komplette Atom-Ausstieg, danach werden auch fossile Energieträger durch neue Technik und 100% erneuerbare\n      Energien ersetzt (Energieautonomie). Sofortiges Ende der Wiederaufarbeitung von Brennelementen. Unterdrückung von Erfindungen\n      aus eigensüchtigen Motiven sowie Kartellbildung werden nicht mehr geduldet und wirksam unterbunden. Offenlegung aller\n      Geheimdokumente über außerirdische Lebensformen und Technologien.</p>\n    <p>Eingebaute Produktalterung (Obsoleszenz) wird ein Straftatbestand, die Mindestgarantiefrist auf drei Jahre verlängert,\n      so fördern wir Wertarbeit und den Verzicht auf Billigprodukte. Schutz vor Spionage und Benachteiligung im Ausland,\n      besserer Übernahmeschutz, Ende sinnloser internationaler Sanktionspolitik.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\wirtschaft-component\wirtschaft.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], WirtschaftComponent);

//# sourceMappingURL=wirtschaft.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArbeitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArbeitComponent = (function () {
    function ArbeitComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ArbeitComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ArbeitComponent;
}());
ArbeitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-arbeit",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\arbeit-component\arbeit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Arbeit und Soziales</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Arbeit und Soziales</h2>\n  </div>\n  <div>\n    <p>Jeder arbeitsfähige Mensch geht einer Beschäftigung nach. In einer Vorphase vor Einführung des Bedingungslosen Grundeinkommens\n      (BGE) steht das Solidarische Grundeinkommen (SGE): Beim SGE erhalten alle Beschäftigungslosen eine Liste der in ihrer\n      Umgebung tätigen gemeinnützigen Organisationen. Wer Grundeinkommen erhalten will, wählt den künftigen Wirkungskreis\n      aus und nimmt seine Tätigkeit auf – oder setzt mit amtlicher Zustimmung eigene Ideen um. Auch unentgeltliche gemeinnützige\n      Tätigkeiten, wie die Betreuung von Kindern, Alten oder Kranken, sichern das SGE: nach aktuellen Maßstäben 1.200 €.\n      Nach der Phase des SGE folgt etwa 3-5 Jahre später das BGE für alle. Ziel: Sinnvolle Arbeitswelten für alle gemäß ihren\n      Wünschen und Fähigkeiten frei von Existenzproblemen. Dadurch werden Billiglöhne und Schein-Leiharbeit unterbunden.\n      SGE und BGE gibt es nur für deutsche Staatsbürger. Ältere Menschen erhalten umfangreiche Unterstützung.</p>\n    <p>Volle Gleichberechtigung der Geschlechter bei Einstellung, Einkommen und Aufstiegschancen. Wesentlich mehr Eingliederungschancen\n      - vor allem für junge Mütter nach dem 3. Lebensjahr ihrer Kinder. Familien erhalten großzügige Förderung.</p>\n    <p>Das Auseinanderdriften von Arm und Reich wird gestoppt und zurückgefahren. Die Solidarität aller Menschen untereinander\n      wird gestärkt.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\arbeit-component\arbeit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], ArbeitComponent);

//# sourceMappingURL=arbeit.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerteidigungComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerteidigungComponent = (function () {
    function VerteidigungComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    VerteidigungComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return VerteidigungComponent;
}());
VerteidigungComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-verteidigung",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\verteidigung-component\verteidigung.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Verteidigung</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Verteidigung</h2>\n  </div>\n  <div>\n    <p>Die neue Verteidigungsstrategie lautet: „Full Spectrum Defense“ – und stellt sicher, dass Deutschland auf jedem Gebiet\n      – entweder eigenständig oder im Verbund mit anderen Nationen – abschreckend verteidigungsfähig wird. Die Bundeswehr\n      erhält insgesamt eine strukturelle Nichtangriffsfähigkeit. Eine reine Berufsarmee ist mit der bewährten Idee des Bürgers\n      in Uniform schwer vereinbar. Die großen Herausforderungen der Zukunft, auch an die künftig erweiterte Freiheit und\n      Mitsprache der Bürger, sind deshalb bei einer Wehrpflichtarmee mit starken professionellen Anteilen besser aufgehoben:\n      Deutschland kehrt zu diesem Modell zurück. Das bewährte Prinzip der Inneren Führung sowie die Gewissensfreiheit der\n      Soldaten werden wieder bestärkt.</p>\n    <p>Wer keinen Wehrdienst leistet, wird zu einem Sozialen oder Ökologischen Jahr nach eigener Wahl verpflichtet. Die Bundeswehr\n      wird eine starke, gut gerüstete, mobile und vernetzte Verteidigungsarmee – mit voller Solidarität aller Bürger. Bundeswehreinsätze\n      im Inneren sind ausgeschlossen – auch in anderen Ländern.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\verteidigung-component\verteidigung.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], VerteidigungComponent);

//# sourceMappingURL=verteidigung.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BildungComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BildungComponent = (function () {
    function BildungComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    BildungComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return BildungComponent;
}());
BildungComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-bildung",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\bildung-component\bildung.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Bildung</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Bildung und Forschung</h2>\n  </div>\n  <div>\n    <p>Große Investitionen in Bildung und Forschung machen Deutschland wieder zur führenden Nation in diesem Bereich.</p>\n    <p>Die elterliche Kindererziehung bis zum Erreichen des dritten Lebensjahres wird finanziell kräftig gefördert. Schulklassen\n      unter 20 Kinder, große Erweiterungen bei den Universitäten, aufgestockte Budgets in der Forschung. Deutlich bessere\n      bauliche und technische Ausstattungen überall. Förderung betrieblicher Verzahnung und deutlich mehr wissenschaftliche\n      Freiheit und Unabhängigkeit gehören unbedingt zusammen: mit transparenter Finanzierung sowie allgemein zugänglichen\n      Forschungsergebnissen.</p>\n    <p>Wir fordern die Abschaffung von Schulzwang und das Recht auf freies Lernen, Förderung selbstbestimmter, praxisbezogener,\n      erlebnisorientierter Bildungsformen – mit Ergebniskontrolle. Die Disziplin Bildungswissenschaften setzen wir völlig\n      neu auf.</p>\n    <p>Wir fordern unabhängige, dem Gemeinwohl verpflichtete Mediennetzwerke mit transparenter Berichterstattung, die Abschaffung\n      des Zwangsbeitrags zur Finanzierung des öffentlich-rechtlichen Rundfunks und ein Verbot der Zusammenarbeit zwischen\n      Meldebehörden und Gebühreneinzug.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\bildung-component\bildung.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], BildungComponent);

//# sourceMappingURL=bildung.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FamilieComponent = (function () {
    function FamilieComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FamilieComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return FamilieComponent;
}());
FamilieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-familie",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\familie-component\familie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Familie</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Familie, Senioren, Frauen und Jugend</h2>\n  </div>\n  <div>\n    <p>Großzügige Förderung von Familien mit Kindern, auch durch kostenlose Paar-, Eltern- und Familienberatung. 50% mehr Kindergeld,\n      zusätzlich erhalten Eltern nach aktuellen Maßstäben 5.000 € für das erste Kind, je 10.000 € für jedes weitere Kind\n      – alle Leistungen sind anrechnungsfrei und pfändungssicher. Homo-Ehe: ja - Adoptionen nur als gut begründete Ausnahmen,\n      vor allem bei leiblichen Kindern! Förderung der individuellen, spontanen und natürlichen Geburt, Aufwertung des Berufs\n      der Hebammen, mehr Unterstützung für junge Mütter. Frauen erhalten auf Wunsch Hilfe für den Wiedereinstieg in den Beruf.\n      KiTa-Plätze für alle Kinder ab drei Jahren, bessere Personalausstattung von Erziehungseinrichtungen.</p>\n    <p>„Gender Mainstreaming“, die Gleichmachung der Geschlechter, wird nicht mehr gefördert, gleichwohl sind Mann und Frau\n      Träger gleicher unveräußerlicher Rechte.</p>\n    <p>Die Deutsche Mitte fördert Großfamilien und Mehrgenerationsgemeinschaften, in denen ältere Menschen geachtet werden und\n      in der Gemeinschaft ihren Wünschen und Fähigkeiten entsprechend Aufgaben bis zu ihrem Lebensende erfüllen. Senioren\n      werden auf Wunsch besser betreut, mit mehr Personal und deutlich besserer Alterssicherung!</p>\n    <p>Jugendarbeit vertritt die Interessen der Jugend bei der Entdeckung und Entwicklung ihrer Persönlichkeit und fördert Selbstorganisation,\n      Eigenaktivität und verantwortungsvolle Teilhabe der Jugendlichen an der Gemeinschaft.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\familie-component\familie.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], FamilieComponent);

//# sourceMappingURL=familie.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmweltComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UmweltComponent = (function () {
    function UmweltComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    UmweltComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return UmweltComponent;
}());
UmweltComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-umwelt",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\umwelt-component\umwelt.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Umwelt</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Umwelt, Naturschutz und Reaktorsicherheit</h2>\n  </div>\n  <div>\n    <p>Die Deutsche Mitte sieht den Menschen in der hohen Verantwortung, die natürlichen Grundlagen für alle Lebensformen zu\n      bewahren. Darum erhalten Umwelt- und Naturschutz bedeutenden Vorrang. Stärkung und Weiterentwicklung der Nationalen\n      Naturlandschaften, mehr Wildnisgebiete (min. 2% der Landesfläche), bessere Betreuung der Schutzgebiete, Förderung nachhaltiger\n      und naturschonender Landnutzung. Selbständige Regulation der Wildtiere hat Vorrang vor der Jagd. Schaffung lokaler\n      Stoff- und Energiekreisläufe, Abschaffung des Anschlusszwangs an die Kanalisation bei kontrolliertem Betrieb eigener\n      Abwasserreinigung, Umstieg von zentraler auf dezentrale Energieversorgung mit Ausbau regenerativer und alternativer\n      Energieversorgung (Energieautonomie).</p>\n    <p>Verbot der künstlichen Beeinflussung der Atmosphäre und jeglichen Geo-Engineerings – außer zu Verteidigungszwecken bei\n      entsprechender Bedrohungslage.</p>\n    <p>Umweltkriminalität wird stärker verfolgt und bestraft, Fracking grundsätzlich verboten.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\umwelt-component\umwelt.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], UmweltComponent);

//# sourceMappingURL=umwelt.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NahrungComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NahrungComponent = (function () {
    function NahrungComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    NahrungComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return NahrungComponent;
}());
NahrungComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-nahrung",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\nahrung-component\nahrung.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Nahrung</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Ernährung, Landwirtschaft und Verbraucherschutz</h2>\n  </div>\n  <div>\n    <p>Die Deutsche Mitte fordert das Recht auf natürlich gesunde Lebensmittel. Schrittweise Umstellung auf ökologische, pestizid-\n      und gentechnikfreie Landwirtschaft (Mindeststandard: Bioland). Dies geschieht freiwillig und mit finanzieller Förderung.\n      Junge Menschen helfen dabei in ihrem sozialen/ökologischen Jahr und erlernen so den Bezug zur Natur. Wir fördern die\n      unabhängige, regionale Agrarproduktion in Familienbetrieben und Genossenschaften: Landwirte sollen ohne EU-Diktat handeln\n      und die volle Ernährungssouveränität zurückerhalten. Zudem erhält jeder volljährige Bürger das Recht, ein kostenloses\n      Grundstück mit einer Größe von 400 m² als Privateigentum zu erhalten und frei zu bewirtschaften (=> 9,1% der Landesfläche).</p>\n    <p>Förderung nachhaltiger Land- und Forstbewirtschaftung, die sich an der Biodiversität orientiert. Schutz und Regeneration\n      von Böden mit nachhaltigem Humusaufbau und der Bienenvölker als natürliche Lebensgrundlage. Ganzjährige grüne Bedeckung\n      aus nutzbaren Pflanzen wird erste Regel der Landwirtschaft.</p>\n    <p>Bewahrung und Förderung altbewährten Saatgutes und dezentraler Saatguterzeugung. Keine Patentrechte auf Lebewesen oder\n      Samen. Der Nahrungsmittelstandard Codex Alimentarius wird nachhaltig und ökologisch ausgerichtet. Die Zulassung für\n      gentechnisch veränderte Pflanzen widerspricht aktuellen wissenschaftlichen Erkenntnissen und ist deshalb abzulehnen.\n      Die Haftung aller Beteiligten bei Prüf- und Zulassungsverfahren muss ebenso zur Pflicht werden wie die positive Kennzeichnung\n      gentechnisch veränderter Produkte! Wir fordern artgerechte Tierhaltung und Fütterung und somit Abschaffung der bisherigen\n      Massentierhaltung. Dabei erfolgen sämtliche Umstellungen in enger Abstimmung mit allen Beteiligten.</p>\n    <p>Wasserversorgung und andere Naturgüter gehören nicht in Konzernhände! LobbyEingriffe in Verbraucher- und Naturschutz\n      werden verboten, die Unabhängigkeit der Forschung wird bestärkt und kontrolliert.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\nahrung-component\nahrung.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], NahrungComponent);

//# sourceMappingURL=nahrung.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GesundheitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GesundheitComponent = (function () {
    function GesundheitComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    GesundheitComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return GesundheitComponent;
}());
GesundheitComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-gesundheit",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\gesundheit-component\gesundheit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Gesundheit</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Gesundheit</h2>\n  </div>\n  <div>\n    <p>Die Deutsche Mitte strebt schrittweise eine kostenlose medizinische Grundversorgung für alle an. Wir stehen für ursachenbezogene\n      ganzheitliche Heilkunde und natürliche Medizin, die sich am Menschen orientiert – bei deutlich gestärkter individueller\n      Betreuung. Überteuerte Kartellmedizin wird durch wirkungsvollere, höherwertige und preisgünstigere natürliche Methoden\n      ersetzt – wissenschaftlich untermauert. Aufbau ganzheitlicher Gesundheitszentren und Förderung von Solidargemeinschaften\n      und alternativer Absicherungen im Krankheitsfall mit dem Recht auf freie Therapiewahl. Das ungerechte Abrechnungsverfahren\n      wird stark vereinfacht. Die Zulassungsbedingungen für neue Impfstoffe, (nicht natürliche) Medikamente und Therapien\n      werden verschärft, für zugelassene gilt eine Übergangsfrist. Die Haftungsbefreiung der Impfstoffhersteller sowie das\n      Impf-Mobbing werden beendet.</p>\n    <p>Die wahren Krankheitsursachen wie z. B. Pestizide, Umwelt- und Medikamentengifte, Elektrosmog, Junk-Food oder Luftverschmutzung\n      werden identifiziert und Schritt für Schritt beseitigt. Profitorientierung hat im Gesundheitswesen nichts verloren.</p>\n    <p>Krankenhäuser, Pflegeheime und Psychiatrien werden personell aufgestockt, die Bezahlung verbessert und menschliche Zuwendung\n      aufgewertet. Selbstverwaltung wird allgemein gefördert. Strengere Grenzwerte für Elektrosmog und Radioaktivität.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\gesundheit-component\gesundheit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], GesundheitComponent);

//# sourceMappingURL=gesundheit.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerkehrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerkehrComponent = (function () {
    function VerkehrComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    VerkehrComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return VerkehrComponent;
}());
VerkehrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-verkehr",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\verkehr-component\verkehr.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Verkehr</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Verkehr, Bau und Stadtentwicklung</h2>\n  </div>\n  <div>\n    <p>Voll-Ausbau der Bahn zum großen LogistikDienstleister, keine Privatisierung, stattdessen Zusammenarbeit mit Privatfirmen,\n      deutlich weniger und kleinere LKW auf den Straßen. Großprojekte mit enger Einbindung der Bevölkerung. Grünere Städte,\n      „essbare Städte“ (Nutzpflanzen für die Allgemeinheit auf öffentlichen Grünflächen). Reform der Energieeffizienzpolitik.\n      Ökologisches Bauen mit modernen Methoden und Techniken nach baubiologischen Standards – und mit strikt sozialfreundlicher\n      Zielsetzung und Strategie, auch innerhalb einzelner Bauprojekte. Förderung regionaler Selbstverwaltung, keine Privatisierung\n      kommunaler und staatlicher Basisaufgaben! Regional unabhängige Wasser-, Strom- und Wärmeversorgung.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\verkehr-component\verkehr.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], VerkehrComponent);

//# sourceMappingURL=verkehr.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntwicklungComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntwicklungComponent = (function () {
    function EntwicklungComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    EntwicklungComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return EntwicklungComponent;
}());
EntwicklungComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-entwicklung",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\entwicklung-component\entwicklung.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Entwicklung</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Wirtschaftliche Zusammenarbeit und Entwicklung</h2>\n  </div>\n  <div>\n    <p>Fairer Handel ohne Diktate aus IWF und Weltbank. Internationale Unterstützungsleistungen werden künftig neben bisherigen\n      Verfahren zusätzlich in verantwortlichen Patenschaften organisiert – und müssen kontrolliert und überprüfbar den Interessen\n      und Bedürfnissen der empfangenden Völker dienen. Hilfe zur Selbsthilfe! Kontrollergebnisse sind öffentlich!</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\entwicklung-component\entwicklung.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], EntwicklungComponent);

//# sourceMappingURL=entwicklung.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JustizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JustizComponent = (function () {
    function JustizComponent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    JustizComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return JustizComponent;
}());
JustizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-justiz",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\justiz-component\justiz.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n    </ion-buttons>\n    <ion-title>Justiz</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div>\n    <h2 class="header">Justiz</h2>\n  </div>\n  <div>\n    <p>Recht darf kein Privileg der Wohlhabenden oder Mächtigen sein. Gerechtigkeit soll vor Gericht siegen. Ausbau des Justizwesens,\n      weniger machtpolitischer Einfluss, mehr richterliche Unabhängigkeit, neue, ethische Richterwahlverfahren für Bundesgerichte,\n      schnellere Verfahren. Reform des Strafrechts, weniger strenge Bestrafung von Kleinstkriminalität, weniger Haftstrafen,\n      insbesondere bei Familien. Bürgerrechte und –schutz sind deutlich zu stärken.</p>\n  </div>\n  <button ion-button color="danger" full (click)="dismiss()">{{\'CLOSE\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\about\justiz-component\justiz.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], JustizComponent);

//# sourceMappingURL=justiz.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturePoliticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuturePoliticsComponent = (function () {
    function FuturePoliticsComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return FuturePoliticsComponent;
}());
FuturePoliticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-futurepolitics",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\futurepolitics\futurepolitics-component\futurepolitics.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle="left" icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    <ion-title>{{\'FUTUREPOLITICS\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n          <ion-icon name=\'more\'></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <h1 class="header" text-center>10 THESEN zur neuen Politik für Deutschland, Europa und die Welt</h1>\n  <p><i>Heute sorgen wir uns alle um Frieden und Wohlergehen; in allen Lebensbereichen erfahren wir ständig Verschlechterungen. Es ist höchste Zeit für eine große Reformation von Staat und Gesellschaft.</i></p>\n  <ion-card>\n    <ion-card-content>\n      <h3><b>1. Regieren heißt dienen – nicht herrschen.</b></h3>\n      <p>Ehrliche Politik braucht Ethik. Wahrhaftigkeit in Regierung, Verwaltung und Medien bringt Frieden, Gerechtigkeit und\n        Gemeinsinn. Alle Menschen sind miteinander verbunden! Direkte Demokratie ist grundlegend.</p>\n      <h3><b>2. Außenpolitik ist Friedenspolitik.</b></h3>\n      <p>Verbundenheit miteinander führt zu fairem und gerechtem Ausgleich unter allen Völkern und bringt Hilfe für alle, die\n        Not leiden. Freundschaft mit West und Ost, ohne Ausnahmen, auch mit Russland und USA.</p>\n      <h3><b>3. Frieden und Wohlstand in Herkunftsländern beenden die Massenflucht.</b></h3>\n      <p>Wir bringen Millionen schrittweise zurück in die Heimat und helfen Nachbarländern kriegführender Regionen. Geistige\n        Grundlage: Echte Heimatverbundenheit eint alle Völker.</p>\n      <h3><b>4. Sicherheit und Gerechtigkeit in Währung und Finanzen schützen Volkswirtschaften vor Raubzügen des Finanzkartells.</b></h3>\n      <p>Risikofrei verlassen wir den Euro – gemeinsam mit europäischen Partnern! Geldschöpfung der öffentlichen Hand, Mittelständische\n        Finanzdienstleistungen und vielfältige gemeinschaftliche Wirtschafts- und Finanzierungsformen überwinden das Ausbeutungssystem\n        aus Zins, Zinseszins und Schuldgeld! Bargeld bleibt.</p>\n      <h3><b>5. Wirtschaft dient wieder allen Menschen und ihrer Selbstverwirklichung.</b></h3>\n      <p>Gelebte menschliche Werte erzeugen buchungstechnisch Kaufkraft.<b>Steuern runter!</b> Privatisierung stoppen! Freies\n        Internet! Produkte sind lange haltbar, umweltfreundlich, praktisch und ungefährlich. Deutliche Lohnsteigerungen für\n        alle! Grundeinkommen fördert gemeinnützige Arbeit und löst Existenzprobleme. Großzügige Hilfen für Rentner, Behinderte\n        und Kranke – vor allem aber: für Kinder und Familien.</p>\n      <h3><b>6. Ethische Politik schützt die natürlichen Grundlagen aller Lebensformen.</b></h3>\n      <p>Wir bringen ökologische Bau-, Land- und Forstwirtschaft, Wasser-, Boden- und Bienenschutz, gesunde Lebensmittel, dezentrale\n        Versorgung aus neuen Energiequellen, nachhaltige Ressourcennutzung und kostenlose Kleingärten für alle.</p>\n      <h3><b>7. Die moderne Bildungswelt lässt alle Menschen ihre Möglichkeiten voll entfalten:</b></h3>\n      <p>Wahlfreiheit für neue Schul- und Lernwege, mehr und bessere KitaPlätze, deutlich kleinere Schulklassen, mehr Ausstattungen\n        und besser ausgebildete Lehrer überall.</p>\n      <h3><b>8. Gesundheit ist ein Geburtsrecht.</b></h3>\n      <p>Kostenlose Grundversorgung für alle! Ganzheitliche Naturheilkunde statt giftiger Medikamente und Symptomkuren! Freie\n        Therapiewahl! Alternative Solidargemeinschaften.</p>\n      <h3><b>9. Der ethische Staat bringt innere Sicherheit für alle.</b></h3>\n      <p>Unverzichtbar sind mehr und besser bezahlte Polizisten, die wir kennen. GEZ abschaffen.</p>\n      <h3><b>10.Volle Souveränität, Friedensvertrag und eine neue Verfassung schaffen Frieden und Freiheit.</b></h3>\n      <p>Viel mehr Mitsprache und Offenheit im Regierungshandeln auf allen Ebenen! Gerechte Justiz.</p>\n    </ion-card-content>\n  </ion-card>\n  <h2 class="footer">Prüfen Sie: Ehrliche Politik rechnet sich! Wir haben die Vision UND den Plan.!</h2>\n  <p><img src="assets/img/10ThesenFlyer.jpg" /></p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\futurepolitics\futurepolitics-component\futurepolitics.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], FuturePoliticsComponent);

//# sourceMappingURL=futurepolitics.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadsComponent = (function () {
    function DownloadsComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DownloadsComponent;
}());
DownloadsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-downloads",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\downloads\downloads-component\downloads.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle="left" icon-only>\n    <ion-icon name=\'menu\'></ion-icon>\n  </button>\n    <ion-title>Downloads</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n              <ion-icon name=\'more\'></ion-icon>\n            </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 class="header" text-wrap text-center>Druckvorlagen und Schriftsätze zum Herunterladen</h1>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/Flyer-Deutsche-Mitte-A6.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/03/DM_Flyer_DIN_C6_lang_Wickelfalz_27_03_2017.pdf" target="_blank"\n          rel="noopener noreferrer">Wickelfalz Flyer DIN C6 lang (neu)</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/A5_flyer_19.4.2017_dm.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/04/ohneBeschnitt_A5_flyer_26.01.2017_dm.pdf" target="_blank" rel="noopener noreferrer">Falzflyer DIN A5 ohne Beschnitt</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/04/1mm_A5_flyer_19.4.2017_dm.pdf" target="_blank" rel="noopener noreferrer">Falzflyer DIN A5 1 mm Beschnitt</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/04/2mm_A5_flyer_20.04.2017_dm.pdf" target="_blank" rel="noopener noreferrer">Falzflyer DIN A5 2 mm Beschnitt</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/04/3mm_A5_flyer_19.4.2017_dm.pdf" target="_blank" rel="noopener noreferrer">Falzflyer DIN A5 3 mm Beschnitt</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/DM-Flugblatt-Thumbnail.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/04/DM-Flugblatt-2017.pdf" target="_blank" rel="noopener noreferrer">Flugblatt Kurzprogramm farbig</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/04/DM-Flugblatt-2017_s-w.pdf" target="_blank" rel="noopener noreferrer">Flugblatt Kurzprogramm sw</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/Aufnahmeantrag-DIN-A4-Zwei-Seiten.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/downloads/Aufnahmeantrag_DM.pdf" target="_blank" rel="noopener noreferrer">Aufnahmeantrag DIN A4 zweiseitige Version 07.06.2017</a>\n      </h2>\n      <h2 text-wrap text-center>\n        <ion-note text-center>(Tipp: Bei beidseitigem Bedrucken eines DIN A4 Blattes können mehrere Blätter zu einem Abreissblock zusammengeleimt\n          werden.)\n        </ion-note>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/10-Thesen.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/06/DM-10-Thesen-Flyer_A4_2017-06_web.pdf" target="_blank" rel="noopener noreferrer">10 Thesen</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/Welche-Partei-passt-zu-mir.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/06/DM-Wahl-O-Mat-Flyer_A4_2017-06_web.pdf" target="_blank" rel="noopener noreferrer">Welche Partei passt zu mir</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/Merkblatt-Parteispenden.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/06/Merkblatt-Parteispenden-2017-06-21.pdf" target="_blank" rel="noopener noreferrer">Merkblatt Parteispenden</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/PDF-Thumbnail.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/03/DM-Kurzprogramm-2017.pdf" target="_blank" rel="noopener noreferrer">Kurzprogramm der Deutschen Mitte</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2014/08/2014_august_DM-AA-1neu.pdf" target="_blank" rel="noopener noreferrer">Außenpolitik</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2015/06/2015_DM_BmVg1.pdf" target="_blank" rel="noopener noreferrer">Verteidigungspolitik</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2013/09/Innenpolitik.pdf" target="_blank" rel="noopener noreferrer">Innenpolitik</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2013/09/Finanzpolitik.pdf" target="_blank" rel="noopener noreferrer">Finanzpolitik</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/02/deutsch-russische_beziehungen.pdf" target="_blank" rel="noopener noreferrer">Deutsch-russische Beziehungen</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/02/deutsch-iranische_beziehungen.pdf" target="_blank" rel="noopener noreferrer">Deutsch-iranische Beziehungen</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2015/10/friedens-protestbewegung_politischer-rahmen.pdf" target="_blank"\n          rel="noopener noreferrer">Parteineutrales Programm der Friedens- und Protestbewegung</a>\n      </h2>\n      <h2 text-center margin class="header">Foreign languages</h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/02/german-center_abridged-party-platform.pdf" target="_blank" rel="noopener noreferrer">German Center – Abridged Party Platform</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/02/german-center_german-russian_relations.pdf" target="_blank"\n          rel="noopener noreferrer">German Center – German-Russian Relations</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/06/2015_DM_BmVg_EN.pdf" target="_blank" rel="noopener noreferrer">Priorities for German Defense Policy</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2017/07/DM_KurzProgramm2016_GRI.pdf" target="_blank" rel="noopener noreferrer">Περιληπτική Κομματική Πλατφόρμα</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/Plakate-Thumbnail.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/03/Demokratie_A1_2mb.pdf" target="_blank" rel="noopener noreferrer">Direkte Demokratie</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/03/Euro_A1_2mb.pdf" target="_blank" rel="noopener noreferrer">Raus aus dem Euro</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/03/TTIP_A1_2mb.pdf" target="_blank" rel="noopener noreferrer">TTIP CETA TISA</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/03/Sozialpolitik_A1_2mb.pdf" target="_blank" rel="noopener noreferrer">Umverteilung</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/03/VerfassungA1_2mb.pdf" target="_blank" rel="noopener noreferrer">Verfassung</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/03/Zinssystem_A1_2mb.pdf" target="_blank" rel="noopener noreferrer">Zinssystem</a>\n      </h2>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/uploads/2016/03/Zuwanderer.pdf" target="_blank" rel="noopener noreferrer">Zuwanderer</a>\n      </h2>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="/src/assets/img/downloads/Wahlplakate-1.png" /></ion-thumbnail>\n      <ion-thumbnail item-end>\n        <img src="/src/assets/img/downloads/Wahlplakate-4.png" /></ion-thumbnail>\n      <h2 text-center>\n        <a href="http://deutsche-mitte.de/wp-content/downloads/Wahlplakate%20DIN%20A1.zip" target="_blank" rel="noopener noreferrer">5 Wahlplakate DIN A1 hochauflösend</a>\n      </h2>\n      <h2 text-center>\n        <ion-note text-center>Download als ZIP-Datei (40MB)</ion-note>\n      </h2>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\downloads\downloads-component\downloads.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], DownloadsComponent);

//# sourceMappingURL=downloads.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_firebase_home_firebase_home_component__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(storage, translate, appVersion) {
        this.storage = storage;
        this.translate = translate;
        this.appVersion = appVersion;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("language").then(function (value) {
            if (value) {
                _this.language = value;
            }
            else {
                _this.language = "de";
            }
        });
        var appName = this.appVersion.getAppName();
        var packageName = this.appVersion.getPackageName();
        var versionCode = this.appVersion.getVersionCode();
        var versionNumber = this.appVersion.getVersionNumber();
    };
    ;
    SettingsComponent.prototype.getVersionNumber = function () {
        var versionNumber = this.appVersion.getVersionNumber();
        this.appVersion.getVersionNumber();
        console.log(versionNumber);
    };
    SettingsComponent.prototype.selectLanguage = function () {
        this.storage.set("language", this.language);
        this.translate.setDefaultLang(this.language);
        this.translate.use(this.language);
    };
    SettingsComponent.prototype.seenTutorial = function () {
        var _this = this;
        this.storage.get("hasSeenTutorial").then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.checkbox = true;
            }
            else {
                _this.checkbox = false;
            }
        });
    };
    SettingsComponent.prototype.toogleSeenTutorial = function () {
        this.storage.set("hasSeenTutorial", false);
        this.disabled = true;
    };
    SettingsComponent.prototype.pushPageFirebase = function (page) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__firebase_firebase_home_firebase_home_component__["a" /* FirebaseHomeComponent */]);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\settings\settings-component\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{\'SETTINGS\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n        <ion-icon name=\'more\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="grid-basic-page">\n  <ion-list>\n    <ion-list-header>\n      {{\'LANGUAGE\' | translate}}\n    </ion-list-header>\n    <ion-item>\n      <ion-label>{{\'LANGUAGE\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="language" (ionChange)=selectLanguage()>\n        <ion-option value="de">{{\'GERMAN\' | translate}}</ion-option>\n        <ion-option value="en">{{\'ENGLISH\' | translate}}</ion-option>\n        <ion-option value="fr">{{\'FRENCH\' | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <button (tap)=toogleSeenTutorial() [(ngModel)]="checkbox"></button>\n      <ion-label>Einführung erneut Aktivieren</ion-label>\n    </ion-item>\n    <ion-item>{{appName}}\n    </ion-item>\n    <ion-note>{{packageName}}\n    </ion-note>\n    <ion-item>{{versionCode}}\n    </ion-item>\n    <ion-note>{{versionNumber}}\n    </ion-note>\n    <!--     <button (tap)="pushPageFirebase(page)">\n      <ion-icon margin name="pin"></ion-icon>\n      <h4 color="primary">{{\'LOGIN\' | translate}}</h4>\n    </button> -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\settings\settings-component\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */]])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_login_firebase_login_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_sign_up_firebase_sign_up_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_reset_password_firebase_reset_password_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FirebaseHomeComponent = (function () {
    function FirebaseHomeComponent(navController, toastController, angularFireAuth, firebaseDB, platform, fb) {
        this.navController = navController;
        this.toastController = toastController;
        this.angularFireAuth = angularFireAuth;
        this.firebaseDB = firebaseDB;
        this.platform = platform;
        this.fb = fb;
    }
    FirebaseHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.angularFireAuth.authState.subscribe(function (data) {
            if (data) {
                _this.auth = data;
            }
            else {
                _this.auth = null;
            }
            _this.loading = false;
        });
    };
    FirebaseHomeComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            return this.fb.login(["email", "public_profile"]).then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                return __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]()
                    .signInWithCredential(facebookCredential)
                    .then(function (data) {
                    _this.auth = data.auth;
                })
                    .catch(function (error) {
                    var errorMessage = error;
                    if (errorMessage && errorMessage.message) {
                        var message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
                        var toast = _this.toastController.create({
                            message: message,
                            duration: 6000,
                            position: "bottom"
                        });
                        toast.present();
                    }
                });
            });
        }
        else {
            return this.angularFireAuth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"].FacebookAuthProvider())
                .then(function (data) {
                _this.auth = data.auth;
            })
                .catch(function (error) {
                var errorMessage = error;
                if (errorMessage && errorMessage.message) {
                    var message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
                    var toast = _this.toastController.create({
                        message: message,
                        duration: 6000,
                        position: "bottom"
                    });
                    toast.present();
                }
            });
        }
    };
    FirebaseHomeComponent.prototype.login = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_5__firebase_login_firebase_login_component__["a" /* FirebaseLoginComponent */]);
    };
    FirebaseHomeComponent.prototype.logout = function () {
        this.angularFireAuth.auth.signOut();
    };
    FirebaseHomeComponent.prototype.signUp = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_6__firebase_sign_up_firebase_sign_up_component__["a" /* FirebaseSignUpComponent */]);
    };
    FirebaseHomeComponent.prototype.resetPassword = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_7__firebase_reset_password_firebase_reset_password_component__["a" /* FirebaseResetPasswordComponent */]);
    };
    return FirebaseHomeComponent;
}());
FirebaseHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-home\firebase-home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Firebase</ion-title>\n    <ion-buttons *ngIf="auth" end>\n      <button (click)="logout()" ion-button icon-only>\n        <ion-icon name="log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <div *ngIf="!auth || (auth && !auth.photoURL)" class="logo" padding-bottom>\n    <img src="assets/img/firebase.png" />\n  </div>\n\n  <div *ngIf="auth && !loading">\n    <div *ngIf="auth.photoURL" margin-bottom class="user-logo" [ngStyle]="{\'background-image\': \'url(\' + auth.photoURL + \')\'}"></div>\n    <div padding-bottom>Willkommen\n      <span *ngIf="auth.displayName">{{auth.displayName}}</span>\n      <span *ngIf="auth.email">({{auth.email}})</span>\n    </div>\n    <button ion-button icon-left block color="light" (click)="logout()">\n      <ion-icon name="log-out"></ion-icon>\n      {{ \'LOGOUT\' | translate }}\n    </button>\n  </div>\n\n  <div *ngIf="!auth && !loading">\n    <button ion-button icon-left block outline class="facebook-btn" (click)="loginWithFacebook()">\n      <ion-icon name="logo-facebook"></ion-icon>\n      Log In mit Facebook\n    </button>\n    <button ion-button icon-left block color="light" class="login-btn" (click)="login()">\n      <ion-icon name="contact"></ion-icon>\n      {{ \'LOGIN\' | translate }}\n    </button>\n    <button ion-button icon-left block clear color="dark" class="action-btn" (click)="signUp()">\n      <ion-icon name="add"></ion-icon>\n      {{ \'SIGN_UP\' | translate }}\n    </button>\n    <button ion-button icon-left block clear color="dark" class="action-btn" (click)="resetPassword()">\n      <ion-icon name="send"></ion-icon>\n      {{ \'RESET_PASSWORD\' | translate }}\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-home\firebase-home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
], FirebaseHomeComponent);

//# sourceMappingURL=firebase-home.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseLoginComponent = (function () {
    function FirebaseLoginComponent(navController, loadingController, toastController, angularFireAuth) {
        this.navController = navController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.angularFireAuth = angularFireAuth;
        this.account = {
            email: "",
            password: ""
        };
    }
    FirebaseLoginComponent.prototype.login = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte Warten"
        });
        loader.present();
        this.angularFireAuth.auth
            .signInWithEmailAndPassword(this.account.email, this.account.password)
            .then(function (value) {
            loader.dismiss();
            _this.navController.pop();
        })
            .catch(function (error) {
            loader.dismiss();
            var errorMessage = error;
            if (errorMessage && errorMessage.message) {
                var message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
                var toast = _this.toastController.create({
                    message: message,
                    duration: 6000,
                    position: "bottom"
                });
                toast.present();
            }
        });
    };
    return FirebaseLoginComponent;
}());
FirebaseLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-login\firebase-login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <div class="logo" padding-bottom>\n    <img src="assets/img/firebase.png" />\n  </div>\n  <form (submit)="login()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Passwort</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button icon-left block color="light">\n          <ion-icon name="log-in"></ion-icon>\n          {{ \'LOGIN\' | translate }}\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-login\firebase-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], FirebaseLoginComponent);

//# sourceMappingURL=firebase-login.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseSignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseSignUpComponent = (function () {
    function FirebaseSignUpComponent(navController, loadingController, toastController, angularFireAuth) {
        this.navController = navController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.angularFireAuth = angularFireAuth;
        this.account = {
            email: "",
            password: ""
        };
    }
    FirebaseSignUpComponent.prototype.signUp = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte warten..."
        });
        loader.present();
        this.angularFireAuth.auth
            .createUserWithEmailAndPassword(this.account.email, this.account.password)
            .then(function (value) {
            loader.dismiss();
            _this.login();
        })
            .catch(function (error) {
            loader.dismiss();
            var errorMessage = error;
            if (errorMessage && errorMessage.message) {
                var message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
                var toast = _this.toastController.create({
                    message: message,
                    duration: 6000,
                    position: "bottom"
                });
                toast.present();
            }
        });
    };
    FirebaseSignUpComponent.prototype.login = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte Warten"
        });
        loader.present();
        this.angularFireAuth.auth
            .signInWithEmailAndPassword(this.account.email, this.account.password)
            .then(function (value) {
            loader.dismiss();
            _this.navController.pop();
        })
            .catch(function (error) {
            loader.dismiss();
            var errorMessage = error;
            if (errorMessage && errorMessage.message) {
                var message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
                var toast = _this.toastController.create({
                    message: message,
                    duration: 6000,
                    position: "bottom"
                });
                toast.present();
            }
        });
    };
    return FirebaseSignUpComponent;
}());
FirebaseSignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-sign-up\firebase-sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'SIGN_UP\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <div class="logo" padding-bottom>\n    <img src="assets/img/firebase.png" />\n  </div>\n  <form (submit)="signUp()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Passwort</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button icon-left block color="light" [disabled]="!account.email || !account.password">\n          <ion-icon name="log-in"></ion-icon>\n          {{ \'SIGN_UP\' | translate }}\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-sign-up\firebase-sign-up.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], FirebaseSignUpComponent);

//# sourceMappingURL=firebase-sign-up.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseResetPasswordComponent = (function () {
    function FirebaseResetPasswordComponent(navController, loadingController, toastController, angularFireAuth, translate) {
        this.navController = navController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.angularFireAuth = angularFireAuth;
        this.translate = translate;
        this.account = {
            email: ""
        };
    }
    FirebaseResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte warten..."
        });
        loader.present();
        this.angularFireAuth.auth
            .sendPasswordResetEmail(this.account.email)
            .then(function (value) {
            loader.dismiss();
            var message = _this.translate.instant("RESET_PASSWORD_EMAIL") +
                " " +
                _this.account.email;
            var toast = _this.toastController.create({
                message: message,
                duration: 6000,
                position: "bottom"
            });
            toast.present();
        })
            .catch(function (error) {
            loader.dismiss();
            var errorMessage = error;
            if (errorMessage && errorMessage.message) {
                var message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
                var toast = _this.toastController.create({
                    message: message,
                    duration: 6000,
                    position: "bottom"
                });
                toast.present();
            }
        });
    };
    return FirebaseResetPasswordComponent;
}());
FirebaseResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-reset-password\firebase-reset-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'RESET_PASSWORD\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  <div class="logo" padding-bottom>\n    <img src="assets/img/firebase.png" />\n  </div>\n  <form (submit)="resetPassword()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button icon-left block color="light" [disabled]="!account.email">\n          <ion-icon name="log-in"></ion-icon>\n          {{ \'RESET_PASSWORD\' | translate }}\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\firebase\firebase-reset-password\firebase-reset-password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["c" /* TranslateService */]])
], FirebaseResetPasswordComponent);

//# sourceMappingURL=firebase-reset-password.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StammtischeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StammtischeComponent = (function () {
    function StammtischeComponent(navCtrl, loadingController) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
    }
    StammtischeComponent.prototype.ngOnInit = function () {
        this.getStart();
    };
    StammtischeComponent.prototype.getStart = function () {
        var loading = this.loadingController.create({
            content: "Suche Stammtische...",
            spinner: "bubbles",
            duration: 1000
        });
        loading.present();
    };
    return StammtischeComponent;
}());
StammtischeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-stammtische",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\stammtische\stammtische-component\stammtische.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle="left" icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    <ion-title>Stammtische der Deutschen Mitte</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n          <ion-icon name=\'more\'></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\'stammtische-page\' padding>\n  <ion-card>\n    <ion-card-content id="fe">\n      <h1 class=\'header\'><b>Die Stammtische der Deutschen Mitte</b></h1>\n      <p>Derzeit gibt es mehr als hundert Stammtische in ganz Deutschland und wöchentlich werden es mehr. Hier lernt man sich\n        kennen und führt erste Gespräche mit Mitgliedern der Deutschen Mitte.</p>\n      <div class=\'map-frame\'>\n        <iframe class=\'map-frame\' src="https://deutsche-mitte.de/wp-content/onlinekarte/Karte_DMStammtische_comapp_orig.html">\n        </iframe>\n      </div>\n      <p>Nehmen Sie Kontakt mit einem Stammtischleiter oder dem Landesverband auf.</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\stammtische\stammtische-component\stammtische.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], StammtischeComponent);

//# sourceMappingURL=stammtische.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookConnectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacebookConnectComponent = (function () {
    function FacebookConnectComponent(navController, platform, storage, fb) {
        this.navController = navController;
        this.platform = platform;
        this.storage = storage;
        this.fb = fb;
    }
    FacebookConnectComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    FacebookConnectComponent.prototype.getUser = function () {
        var _this = this;
        this.storage.get("facebook.user").then(function (data) {
            if (data) {
                _this.user = JSON.parse(data);
            }
        });
    };
    FacebookConnectComponent.prototype.login = function () {
        var _this = this;
        var env = this;
        var permissions = new Array();
        permissions = ["public_profile", "user_friends", "email"];
        this.fb
            .login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            _this.fb
                .api("/me?fields=name,gender,email", params)
                .then(function (response) {
                response.picture =
                    "https://graph.facebook.com/" + userId + "/picture?type=large";
                env.user = response;
                env.storage.set("facebook.user", JSON.stringify(env.user));
            });
        })
            .catch(function (e) { return console.log("Error logging into Facebook", e); });
    };
    FacebookConnectComponent.prototype.logout = function () {
        var env = this;
        this.fb.logout().then(function (response) {
            env.user = null;
            env.storage.remove("facebook.user");
        }, function (error) { });
    };
    return FacebookConnectComponent;
}());
FacebookConnectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\facebook-connect\facebook-connect-component\facebook-connect.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{\'FACEBOOK\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n        <ion-icon name=\'more\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false" class="page-welcome">\n  <div class="facebook-bg"></div>\n  <div class="facebook-info">\n    <div *ngIf="!user" class="facebook-logo"></div>\n    <div *ngIf="user && user.picture" class="facebook-logo" [ngStyle]="{\'background-image\': \'url(\' + user.picture + \')\'}"></div>\n    <div class="facebook-intro">\n      <span *ngIf="!user">Facebook</span>\n      <span *ngIf="user">Hello {{ user.name }}</span>\n    </div>\n    <div class="facebook-email" *ngIf="user">{{ user.email }}</div>\n  </div>\n  <div padding>\n    <button *ngIf="!user" color="light" ion-button icon-left block (tap)="login()">\n      <ion-icon name="logo-facebook"></ion-icon>\n      {{ \'LOGIN\' | translate }}</button>\n    <button *ngIf="user" color="light" ion-button icon-left block (tap)="logout()">\n      <ion-icon name="logo-facebook"></ion-icon>\n      {{ \'LOGOUT\' | translate }}\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\facebook-connect\facebook-connect-component\facebook-connect.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
], FacebookConnectComponent);

//# sourceMappingURL=facebook-connect.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_category_feed_category_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedCategoriesComponent = (function () {
    function FeedCategoriesComponent(feedService, navController, loadingController) {
        this.feedService = feedService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    FeedCategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    FeedCategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.feedService.getCategories().subscribe(function (result) {
            _this.categories = result.categories;
            loader.dismiss();
        });
    };
    FeedCategoriesComponent.prototype.loadCategory = function (category) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__feed_category_feed_category_component__["a" /* FeedCategoryComponent */], {
            category: category
        });
    };
    return FeedCategoriesComponent;
}());
FeedCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feed-categories\feed-categories.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'CATEGORIES\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let category of categories" (click)="loadCategory(category)">\n      <ion-icon [name]="category.icon" item-left></ion-icon>\n      <h2>{{category.title}}</h2>\n      <p>{{category.description}}</p>\n      <button ion-button item-right outline>Read</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feed-categories\feed-categories.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], FeedCategoriesComponent);

//# sourceMappingURL=feed-categories.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedsComponent = (function () {
    function FeedsComponent(feedService, navParams, navController, loadingController) {
        this.feedService = feedService;
        this.navParams = navParams;
        this.navController = navController;
        this.loadingController = loadingController;
        this.feedUrl = navParams.get("feedUrl");
    }
    FeedsComponent.prototype.ngOnInit = function () {
        this.getFeeds();
    };
    FeedsComponent.prototype.getFeeds = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.feedService.getFeeds(this.feedUrl).subscribe(function (result) {
            _this.title = result.query.results.rss.channel.title;
            _this.description = result.query.results.rss.channel.description;
            _this.link = result.query.results.rss.channel.link;
            if (result.query.results.rss.channel.image) {
                _this.image = result.query.results.rss.channel.image.url;
            }
            _this.feeds = result.query.results.rss.channel.item;
            loader.dismiss();
        });
    };
    FeedsComponent.prototype.loadFeed = function (feed) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_2__feed_feed_component__["a" /* FeedComponent */], {
            feed: feed
        });
    };
    return FeedsComponent;
}());
FeedsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feeds\feeds.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section padding>\n    <h2>{{title}}</h2>\n    <p>{{description}}</p>\n    <div center text-center>\n      <img [src]="image" *ngIf="image" />\n    </div>\n  </section>\n  <ion-list>\n    <ion-item *ngFor="let feed of feeds" (click)="loadFeed(feed)">\n      <h2>{{feed.title}}</h2>\n      <p>{{feed.summary}}</p>\n      <button ion-button item-right outline>Read</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feeds\feeds.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_feed_service__["a" /* FeedService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], FeedsComponent);

//# sourceMappingURL=feeds.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedComponent = (function () {
    function FeedComponent(navParams, navController, iab, socialSharing) {
        this.navParams = navParams;
        this.navController = navController;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.feed = navParams.get("feed");
    }
    FeedComponent.prototype.previewFeed = function () {
        var browser = this.iab.create(this.feed.link, "_blank");
        browser.show();
    };
    FeedComponent.prototype.shareFeed = function () {
        var subject = this.feed.title;
        var message = this.feed.description;
        message = message.replace(/(<([^>]+)>)/gi, "");
        var url = this.feed.link;
        this.socialSharing.share(message, subject, "", url);
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feed\feed.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{feed.title}}</ion-title>\n    <ion-buttons end>\n      <button (tap)="shareFeed()" ion-button icon-only>\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section padding>\n    <h1 [innerHtml]=feed.title></h1>\n    <!--<div>{{feed.pubDate | date}}</div>-->\n  </section>\n\n  <video id="video" [src]="feed.enclosure.url" controls autoplay *ngIf="feed.enclosure && feed.enclosure.type === \'video/mp4\' "></video>\n  <audio id="audio" [src]="feed.enclosure.url" controls autoplay *ngIf="feed.enclosure && feed.enclosure.type === \'audio/mpeg\' "></audio>\n  <img [src]="feed.enclosure.url" *ngIf="feed.enclosure && feed.enclosure.type === \'image/jpeg\' " />\n\n  <section padding [innerHtml]="feed.description"></section>\n\n  <button ion-button full (click)=previewFeed()>Preview</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\feeds\feed\feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], FeedComponent);

//# sourceMappingURL=feed.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = (function () {
    function Data(http, storage) {
        this.http = http;
        this.storage = storage;
        this.HAS_SEEN_TUTORIAL = "hasSeenTutorial";
    }
    Data.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    Data.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http
                .get("assets/data/questions.json")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.questions;
                resolve(_this.data);
            });
        });
    };
    return Data;
}());
Data = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], Data);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_login_wordpress_login_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_categories_wordpress_categories_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_favorites_wordpress_favorites_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wordpress_pages_wordpress_pages_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordpress_menus_wordpress_menus_component__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WordpressHome = (function () {
    function WordpressHome(navController, navParams, storage) {
        this.navController = navController;
        this.navParams = navParams;
        this.storage = storage;
        this.user = navParams.get("user");
    }
    WordpressHome.prototype.ngOnInit = function () {
        this.getUser();
        this.pages = [
            {
                title: "MENUS",
                component: __WEBPACK_IMPORTED_MODULE_8__wordpress_menus_wordpress_menus_component__["a" /* WordpressMenus */],
                icon: "menu",
                note: "Wordpress"
            },
            {
                title: "POSTS",
                component: __WEBPACK_IMPORTED_MODULE_4__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
                icon: "logo-wordpress",
                note: "Wordpress"
            },
            {
                title: "CATEGORIES",
                component: __WEBPACK_IMPORTED_MODULE_5__wordpress_categories_wordpress_categories_component__["a" /* WordpressCategories */],
                icon: "pricetags",
                note: "Wordpress"
            },
            {
                title: "FAVORITES",
                component: __WEBPACK_IMPORTED_MODULE_6__wordpress_favorites_wordpress_favorites_component__["a" /* WordpressFavorites */],
                icon: "heart",
                note: "Wordpress (Storage)"
            },
            {
                title: "PAGES",
                component: __WEBPACK_IMPORTED_MODULE_7__wordpress_pages_wordpress_pages_component__["a" /* WordpressPages */],
                icon: "document",
                note: "Wordpress"
            }
        ];
    };
    WordpressHome.prototype.getUser = function () {
        var _this = this;
        this.storage.get("wordpress.user").then(function (data) {
            if (data) {
                _this.user = data;
            }
        });
    };
    WordpressHome.prototype.login = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__wordpress_login_wordpress_login_component__["a" /* WordpressLogin */]);
    };
    WordpressHome.prototype.logout = function () {
        this.user = undefined;
        this.storage.remove("wordpress.user");
    };
    WordpressHome.prototype.openPage = function (page) {
        this.navController.push(page.component);
    };
    return WordpressHome;
}());
WordpressHome = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-home\wordpress-home.html"*/'<ion-content scroll="false" class="page-welcome">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      <span *ngIf="!user">{{ \'LOGIN\' | translate }}</span>\n      <span *ngIf="user">Hello {{ user.user_nicename }}</span>\n    </div>\n    <div class="splash-email" *ngIf="user">{{ user.user_email }}</div>\n  </div>\n  <ion-list *ngIf="user">\n    <ion-item *ngFor="let page of pages" (click)="openPage(page)">\n      <ion-icon [name]="page.icon" item-left></ion-icon>\n      {{page.title | translate}}\n      <ion-note item-right>\n        {{page.note}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button *ngIf="!user" ion-button block (click)="login()">{{ \'LOGIN\' | translate }}</button>\n    <button *ngIf="user" ion-button block (click)="logout()">{{ \'LOGOUT\' | translate }}</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-home\wordpress-home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], WordpressHome);

//# sourceMappingURL=wordpress-home.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_home_wordpress_home_component__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressLogin = (function () {
    function WordpressLogin(navController, loadingController, toastController, storage, wordpressService) {
        this.navController = navController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.storage = storage;
        this.wordpressService = wordpressService;
        this.account = {
            username: "",
            password: ""
        };
    }
    WordpressLogin.prototype.login = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.wordpressService.login(this.account).subscribe(function (result) {
            loader.dismiss();
            _this.storage.set("wordpress.user", result);
            _this.navController.push(__WEBPACK_IMPORTED_MODULE_4__wordpress_home_wordpress_home_component__["a" /* WordpressHome */], {
                user: result
            });
        }, function (error) {
            loader.dismiss();
            var errorMessage = error.json();
            if (errorMessage && errorMessage.message) {
                var message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
                var toast = _this.toastController.create({
                    message: message,
                    duration: 6000,
                    position: "bottom"
                });
                toast.present();
            }
        });
    };
    return WordpressLogin;
}());
WordpressLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-login\wordpress-login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="login()">\n    <ion-list>\n      <!--<ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item> -->\n      <ion-item>\n        <ion-label fixed>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>{{ \'LOGIN\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-login\wordpress-login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */]])
], WordpressLogin);

//# sourceMappingURL=wordpress-login.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_page_wordpress_page_component__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordpressPages = (function () {
    function WordpressPages(wordpressService, navController, loadingController) {
        this.wordpressService = wordpressService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    WordpressPages.prototype.ngOnInit = function () {
        this.getPages();
    };
    WordpressPages.prototype.getPages = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte Warten"
        });
        loader.present();
        this.wordpressService.getPages().subscribe(function (result) {
            _this.pages = result;
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressPages.prototype.loadPage = function (page) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__wordpress_page_wordpress_page_component__["a" /* WordpressPage */], {
            page: page
        });
    };
    return WordpressPages;
}());
WordpressPages = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-pages\wordpress-pages.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{\'PAGES\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let page of pages" (click)="loadPage(page)">\n      <h2>{{page.title.rendered}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-pages\wordpress-pages.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], WordpressPages);

//# sourceMappingURL=wordpress-pages.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeVideoComponent = (function () {
    function YoutubeVideoComponent(navParams, sanitizer, socialSharing) {
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        this.video = navParams.get("video");
        this.prepareResource();
    }
    YoutubeVideoComponent.prototype.prepareResource = function () {
        var url = "http://www.youtube.com/embed/" + this.video.snippet.resourceId.videoId;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeVideoComponent.prototype.shareVideo = function () {
        var _this = this;
        var subject = this.video.snippet.title;
        var message = this.video.snippet.description;
        message = message.replace(/(<([^>]+)>)/gi, "");
        var url = "http://www.youtube.com/embed/" + this.video.snippet.resourceId.videoId;
        setTimeout(function () { return _this.socialSharing.share(message, subject, "", url); }, 250);
    };
    return YoutubeVideoComponent;
}());
YoutubeVideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-video\youtube-video.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{video.snippet.title}}</ion-title>\n    <ion-buttons end>\n      <button (tap)="shareVideo()" ion-button icon-only>\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="youtube-video">\n  <iframe *ngIf="video.snippet.resourceId.videoId" [src]="videoUrl" frameborder="0" allowfullscreen="true"></iframe>\n  <div padding>\n    <h2>{{video.snippet.title}}</h2>\n    <p>Published by\n      <strong>{{video.snippet.channelTitle}}</strong>\n    </p>\n    <p [innerHtml]="video.snippet.description"></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-video\youtube-video.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], YoutubeVideoComponent);

//# sourceMappingURL=youtube-video.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_slides_slides_module__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_module__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_wordpress_wordpress_module__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings_module__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_youtube_youtube_module__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_futurepolitics_futurepolitics_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_downloads_downloads_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_newsletter_newsletter_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_stammtische_stammtische_module__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_quiz_quiz_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_facebook_connect_facebook_connect_module__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_feeds_feeds_module__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_firebase_firebase_module__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Module Example: App Module















//import { Splash } from "../pages/splash/splash.module";
//import { QuizComponent } from '../pages/quiz/quiz-component/quiz';
//import { FlashCardComponent } from '../pages/quiz/flash-card/flash-card';
//import { BarcodeScannerModule } from '../pages/barcode-scanner/barcode-scanner.module';
//import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
//import { GridModule } from '../pages/grid/grid.module';
//import { ContactModule } from '../pages/contact/contact.module';
//import { DatetimeModule } from '../pages/datetime/datetime.module';
//import { RangesModule } from '../pages/ranges/ranges.module';
//import { ActionSheetModule } from '../pages/action-sheet/action-sheet.module';
//import { LoginModule } from '../pages/login/login.module';
//import { ChartsModule } from '../pages/charts/charts.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__pages_slides_slides_module__["a" /* SlidesModule */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs_module__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_wordpress_wordpress_module__["a" /* WordpressModule */],
            __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings_module__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_11__pages_youtube_youtube_module__["a" /* YoutubeModule */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about_module__["a" /* AboutModule */],
            __WEBPACK_IMPORTED_MODULE_13__pages_futurepolitics_futurepolitics_module__["a" /* FuturePoliticsModule */],
            __WEBPACK_IMPORTED_MODULE_14__pages_downloads_downloads_module__["a" /* DownloadsModule */],
            __WEBPACK_IMPORTED_MODULE_15__pages_newsletter_newsletter_module__["a" /* NewsletterModule */],
            __WEBPACK_IMPORTED_MODULE_16__pages_stammtische_stammtische_module__["a" /* StammtischeModule */],
            __WEBPACK_IMPORTED_MODULE_17__pages_quiz_quiz_module__["a" /* QuizModule */],
            __WEBPACK_IMPORTED_MODULE_18__pages_facebook_connect_facebook_connect_module__["a" /* FacebookConnectModule */],
            __WEBPACK_IMPORTED_MODULE_19__pages_feeds_feeds_module__["a" /* FeedsModule */],
            __WEBPACK_IMPORTED_MODULE_20__pages_firebase_firebase_module__["a" /* FirebaseModule */]
            //BarcodeScannerModule,
            //GoogleMapsModule,
            //GridModule,
            //ContactModule,
            //DatetimeModule,
            //RangesModule,
            //ActionSheetModule
            //LoginModule,
            //ChartsModule,
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_2_css_animator__["AnimationService"]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressPosts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_post_wordpress_post_component__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressPosts = (function () {
    function WordpressPosts(navParams, wordpressService, navController, loadingController, toastController, storage) {
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.navController = navController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.storage = storage;
    }
    WordpressPosts.prototype.ngOnInit = function () {
        var _this = this;
        this.category = this.navParams.get("category");
        this.tag = this.navParams.get("tag");
        this.author = this.navParams.get("author");
        this.hideSearchbar = true;
        this.search = "";
        this.favoritePosts = [];
        this.storage.get("wordpress.favorite").then(function (data) {
            if (data) {
                _this.favoritePosts = JSON.parse(data);
            }
        });
        this.getPosts();
    };
    WordpressPosts.prototype.getPosts = function () {
        var _this = this;
        this.pageCount = 1;
        var query = this.createQuery();
        var loader = this.loadingController.create({
            content: "Bitte warten...",
            duration: 10000
        });
        loader.present();
        this.wordpressService.getPosts(query).subscribe(function (result) {
            _this.posts = result;
            loader.dismiss();
        });
    };
    WordpressPosts.prototype.getAuthorPosts = function (author) {
        this.author = author;
        this.getPosts();
    };
    WordpressPosts.prototype.searchPosts = function () {
        this.getPosts();
    };
    WordpressPosts.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        this.pageCount++;
        var query = this.createQuery();
        var loader = this.loadingController.create({
            content: "Bitte warten..."
        });
        var toast = this.toastController.create({
            message: "Keine weiteren Beiträge.",
            duration: 2000
        });
        loader.present();
        this.wordpressService.getPosts(query).subscribe(function (result) {
            infiniteScroll.complete();
            if (result.length < 1) {
                infiniteScroll.enable(false);
                toast.present();
            }
            else {
                _this.posts = _this.posts.concat(result);
            }
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressPosts.prototype.loadPost = function (post) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_4__wordpress_post_wordpress_post_component__["a" /* WordpressPost */], {
            post: post
        });
    };
    WordpressPosts.prototype.favoritePost = function (post) {
        var newPost = true;
        var message;
        this.favoritePosts.forEach(function (favPost) {
            if (JSON.stringify(favPost) === JSON.stringify(post)) {
                newPost = false;
            }
        });
        if (newPost) {
            this.favoritePosts.push(post);
            this.storage.set("wordpress.favorite", JSON.stringify(this.favoritePosts));
            message = "Beitrag wurde zu deinen Favoriten hinzugefügt";
        }
        else {
            message = "Beitrag wurde bereits zu deinen Favoriten hinzugefügt";
        }
        var toast = this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    WordpressPosts.prototype.toggleSearchbar = function () {
        this.hideSearchbar = !this.hideSearchbar;
    };
    WordpressPosts.prototype.createQuery = function () {
        var query = {};
        query["page"] = this.pageCount;
        if (this.search) {
            query["search"] = this.search;
        }
        if (this.category) {
            query["categories"] = this.category.id;
        }
        if (this.tag) {
            query["tags"] = this.tag.id;
        }
        if (this.author) {
            query["author"] = this.author;
        }
        return query;
    };
    return WordpressPosts;
}());
WordpressPosts = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-posts\wordpress-posts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title *ngIf="!category">{{\'POSTS\' | translate}}</ion-title>\n    <ion-title *ngIf="category">{{category.name}}\n      <span *ngIf="category.count">({{category.count}})</span>\n    </ion-title>\n    <ion-buttons end>\n      <button (tap)="toggleSearchbar()" ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar [hidden]="hideSearchbar">\n    <ion-searchbar [(ngModel)]="search" (ionInput)="searchPosts()" debounce=500></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let post of posts">\n    <ion-item text-wrap (tap)="loadPost(post)">\n      <h1 class="header" [innerHTML]="post.title.rendered"></h1>\n    </ion-item>\n    <!--        <wordpress-feature-media *ngIf="post.featured_media" [id]="post.featured_media" (click)="loadPost(post)"></wordpress-feature-media>\n         <ion-item *ngIf="post[\'_embedded\'] && post[\'_embedded\'].author && post[\'_embedded\'].author[0] && post[\'_embedded\'].author[0].avatar_urls">\n            <ion-avatar item-left>\n                <img [src]="post[\'_embedded\'].author[0].avatar_urls[96]">\n            </ion-avatar>\n            <h2 (click)="getAuthorPosts(post.author)">{{post[\'_embedded\'].author[0].name}}</h2>\n        </ion-item> -->\n    <ion-card-content>\n      <p class="content">{{post.content.rendered | trimHTML | truncate: 500 }}</p>\n    </ion-card-content>\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button icon-left clear (tap)="favoritePost(post)">\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{ \'FAVORITE\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear (tap)="loadPost(post)">\n          <ion-icon name=\'book\'></ion-icon>\n          {{ \'READ\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-posts\wordpress-posts.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], WordpressPosts);

//# sourceMappingURL=wordpress-posts.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_slides_slides_component_slides_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs_component_tabs_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_wordpress_wordpress_post_wordpress_post_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_wordpress_wordpress_menus_wordpress_menus_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wordpress_wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_wordpress_wordpress_favorites_wordpress_favorites_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_wordpress_wordpress_categories_wordpress_categories_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wordpress_wordpress_page_downloads_wordpress_page_downloads_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_youtube_youtube_channel_youtube_channel_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about_component_about_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_futurepolitics_futurepolitics_component_futurepolitics_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_downloads_downloads_component_downloads_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings_component_settings_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_stammtische_stammtische_component_stammtische_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_facebook_connect_facebook_connect_component_facebook_connect_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_feeds_feed_categories_feed_categories_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_feeds_feed_category_feed_category_component__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { Splash } from "../pages/splash/splash.module";







//import { WordpressTags } from '../pages/wordpress/wordpress-tags/wordpress-tags.component';
//import { WordpressPages } from '../pages/wordpress/wordpress-pages/wordpress-pages.component';








// import { QuizComponent } from "../pages/quiz/quiz-component/quiz";


// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { BarcodeScannerComponent } from '../pages/barcode-scanner/barcode-scanner-component/barcode-scanner.component';
// import { NewsletterComponent } from '../pages/newsletter/newsletter-component/newsletter.component';
// import { GridComponent } from '../pages/grid/grid-component/grid.component';
// import { DatetimeComponent } from '../pages/datetime/datetime-component/datetime.component';
// import { RangesComponent } from '../pages/ranges/ranges-component/ranges.component';
// import { ActionSheetComponent } from "../pages/action-sheet/action-sheet-component/action-sheet.component";
// import { GoogleMapsComponent } from '../pages/google-maps/google-maps-component/google-maps.component';
// import { LoginComponent } from '../pages/login/login-component/login.component';
var MyApp = (function () {
    function MyApp(config, platform, storage, iab, loadingCtrl, splashScreen, translate, menuController, statusBar, modalCtrl) {
        var _this = this;
        this.config = config;
        this.platform = platform;
        this.storage = storage;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.menuController = menuController;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.menuPage = __WEBPACK_IMPORTED_MODULE_11__pages_wordpress_wordpress_menus_wordpress_menus_component__["a" /* WordpressMenus */];
        this.favoritePosts = [];
        this.wordpressMenusNavigation = false;
        this.initializeApp();
        this.storage.get("hasSeenTutorial").then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs_component_tabs_component__["a" /* TabsComponent */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_slides_slides_component_slides_component__["a" /* SlidesComponent */];
            }
        });
        this.translate.setDefaultLang("de");
        storage.get("language").then(function (value) {
            if (value) {
                _this.translate.use(value);
            }
            else {
                _this.translate.use("de");
                _this.storage.set("language", "de");
            }
        });
        this.storage.get("wordpress.favorite").then(function (data) {
            if (data) {
                _this.favoritePosts = JSON.parse(data);
            }
        });
        this.pagesleft = [
            { title: "HOME", component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs_component_tabs_component__["a" /* TabsComponent */], icon: "home" }
            /*       { title: "FIREBASE", component: FirebaseHomeComponent, icon: "pin" }*/
        ];
        this.pagesleftcenter = [
            { title: "ABOUT", component: __WEBPACK_IMPORTED_MODULE_17__pages_about_about_component_about_component__["a" /* AboutComponent */], icon: "information-circle" },
            {
                title: "FUTUREPOLITICS",
                component: __WEBPACK_IMPORTED_MODULE_18__pages_futurepolitics_futurepolitics_component_futurepolitics_component__["a" /* FuturePoliticsComponent */],
                icon: "book"
            },
            { title: "DOWNLOADS", component: __WEBPACK_IMPORTED_MODULE_19__pages_downloads_downloads_component_downloads_component__["a" /* DownloadsComponent */], icon: "download" }
        ];
        this.pagesleftbottom = [
            { title: "STAMMTISCHE", component: __WEBPACK_IMPORTED_MODULE_21__pages_stammtische_stammtische_component_stammtische_component__["a" /* StammtischeComponent */], icon: "pin" }
        ];
        this.pagesleftfooter = [
            //{ title: 'NEWSLETTER', component: NewsletterComponent, icon: 'help' },
            { title: "SETTINGS", component: __WEBPACK_IMPORTED_MODULE_20__pages_settings_settings_component_settings_component__["a" /* SettingsComponent */], icon: "options" }
        ];
        this.pagesright = [
            {
                title: "FEED_CATEGORY",
                component: __WEBPACK_IMPORTED_MODULE_24__pages_feeds_feed_category_feed_category_component__["a" /* FeedCategoryComponent */],
                icon: "logo-rss"
            },
            { title: "FEEDS", component: __WEBPACK_IMPORTED_MODULE_23__pages_feeds_feed_categories_feed_categories_component__["a" /* FeedCategoriesComponent */], icon: "logo-rss" }
            //		  { title: 'STAMMTISCHE', component: StammtischeComponent, icon: 'pin' }
        ];
        this.pagesrightfooter = [
            { title: "STAMMTISCHE", component: __WEBPACK_IMPORTED_MODULE_21__pages_stammtische_stammtische_component_stammtische_component__["a" /* StammtischeComponent */], icon: "pin" }
        ];
        // { title: "FAVORITES", component: WordpressFavorites, icon: "thumbs-up" }
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
            { title: "YOUTUBE", component: __WEBPACK_IMPORTED_MODULE_16__pages_youtube_youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */], icon: "pin" },
            { title: "POSTS", component: __WEBPACK_IMPORTED_MODULE_12__pages_wordpress_wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */], icon: "paper" },
            {
                title: "CATEGORIES",
                component: __WEBPACK_IMPORTED_MODULE_14__pages_wordpress_wordpress_categories_wordpress_categories_component__["a" /* WordpressCategories */],
                icon: "bookmarks"
            },
            { title: "FAVORITES", component: __WEBPACK_IMPORTED_MODULE_13__pages_wordpress_wordpress_favorites_wordpress_favorites_component__["a" /* WordpressFavorites */], icon: "bookmarks" },
            {
                title: "Facebook Connect",
                component: __WEBPACK_IMPORTED_MODULE_22__pages_facebook_connect_facebook_connect_component_facebook_connect_component__["a" /* FacebookConnectComponent */],
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
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        //        platform.ready().then(() => {
        //   statusBar.styleDefault();
        //   let splash = modalCtrl.create(Splash);
        //   splash.present();
        //});
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.styleBlackTranslucent();
            _this.statusBar.backgroundColorByHexString("#005397");
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
    };
    MyApp.prototype.checkActivePage = function (page) {
        return page == this.activePage;
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: "bubbles",
            cssClass: "apphome",
            content: "Bitte Warten...",
            duration: 500
        });
        this.activePage = page;
        loader.present().then(function () {
            _this.nav.setRoot(page.component).then(function () {
                _this.menuController.close();
            });
        });
    };
    MyApp.prototype.pushPage = function (page) {
        var _this = this;
        this.menuController.close().then(function () {
            _this.nav.push(page.component);
            _this.activePage = page;
        });
    };
    MyApp.prototype.openPageStammtische = function (page) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Suche Stammtische...",
            duration: 500
        });
        this.activePage = page;
        loader.present();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_stammtische_stammtische_component_stammtische_component__["a" /* StammtischeComponent */]).then(function () {
            _this.menuController.close();
        });
    };
    MyApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs_component_tabs_component__["a" /* TabsComponent */]);
    };
    MyApp.prototype.openPageWordpress = function (page) {
        this.menuController.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_wordpress_wordpress_page_downloads_wordpress_page_downloads_component__["a" /* WordpressPageDownloads */], {
            page: page
        });
    };
    MyApp.prototype.loadPost = function (post) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_wordpress_wordpress_post_wordpress_post_component__["a" /* WordpressPost */], {
            post: post
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\app\app.html"*/'﻿<ion-split-pane when="lg">\n  <ion-menu *ngIf="!wordpressMenusNavigation" id="menuleft" side="left" type="overlay" [content]="content">\n    <ion-header>\n      <ion-toolbar no-margin no-padding class="dm-dark">\n        <div class="bounce-animation">\n          <ion-title class="animate-in-secondary">{{\'APPNAME\' | translate}}</ion-title>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list padding-top>\n        <!-- <div class="fade-in-left">\n          <ion-item-divider class="dmo-dark menu-divider-bordered">\n            <h2>{{\'MENU\' | translate}}</h2>\n          </ion-item-divider>\n        </div>\n        <ion-item margin-top margin-bottom></ion-item> -->\n        <ion-item-group class="animate-in-primary" margin-vertical>\n          <button class="animate-in-secondary" ion-item *ngFor="let page of pagesleft" (tap)="openPage(page)" [class.active]="checkActivePage(page)">\n            <ion-icon item-start [name]="page.icon" class="item-avatar item-icon-right"></ion-icon>\n            <h2 color="primary" class="list-grow-animation" ion-text>{{page.title | translate}}</h2>\n          </button>\n          <!--<button outline class="animated bounceInLeft" ion-item (tap)="openPageYoutube()">\n<ion-icon name="logo-youtube" class="youtube" item-start></ion-icon>\n<h2 ion-text color="primary">{{\'YOUTUBE_CHANNEL\' | translate}}</h2>\n                        <ion-note item-end>DM</ion-note>\n                    </button>\n                     <button outline class="animated bounceInLeft" ion-item (tap)="openPageWordpress(page)">\n                      <ion-icon name="" class="" item-start></ion-icon>\n                      <h2 ion-text color="primary">Downloads</h2>\n                      <ion-note item-end>DM</ion-note>\n                  </button>\n                    <button outline class="animated bounceInLeft" ion-item (tap)="startSplash()">\n                      <h2 ion-text color="primary">Start</h2>\n                      <ion-note item-end>Splashscreen</ion-note>\n                  </button> -->\n        </ion-item-group>\n        <ion-item-group class="animate-in-primary" margin-top>\n          <button class="animate-in-secondary" ion-item *ngFor="let page of pagesleftcenter" (tap)="pushPage(page)" [class.active]="checkActivePage(page)">\n            <ion-icon item-start class="item-avatar item-icon-right " [name]="page.icon"></ion-icon>\n            <h2 color="primary" class="list-grow-animation" ion-text>{{page.title | translate}}</h2>\n          </button>\n        </ion-item-group>\n        <ion-item-group class="animate-in-primary" margin-top>\n          <button class="animate-in-secondary" ion-item *ngFor="let page of pagesleftbottom" (tap)=" openPageStammtische(page)" [class.active]="checkActivePage(page)">\n            <ion-icon item-start class="item-avatar item-icon-right " [name]="page.icon"></ion-icon>\n            <h2 color="primary" class="list-grow-animation" ion-text>{{page.title | translate}}</h2>\n          </button>\n        </ion-item-group>\n      </ion-list>\n    </ion-content>\n    <ion-footer class="animate-in-primary">\n      <button class="list-grow-animation" ion-button full *ngFor="let page of pagesleftfooter" (tap)="pushPage(page)" [class.active]="checkActivePage(page)">\n        <ion-icon class="animate-in-primary item-avatar item-icon-right" margin [name]="page.icon"></ion-icon>\n        <h4 class="animate-in-secondary" style="font-size:smaller" color="primary">{{page.title | translate}}</h4>\n      </button>\n    </ion-footer>\n  </ion-menu>\n\n  <ion-menu *ngIf="wordpressMenusNavigation" [content]="content">\n    <ion-nav [root]="menuPage"></ion-nav>\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n</ion-split-pane>\n\n<ion-menu id="menuright" side="right" swipeEnabled="true" [content]="content">\n  <ion-content class="card-background-menu">\n    <ion-list>\n        <ion-item-group class="animate-in-primary" margin-top>\n            <button class="animate-in-secondary" ion-item *ngFor="let page of pagesright" (tap)="pushPage(page)" [class.active]="checkActivePage(page)">\n              <ion-icon item-start class="item-avatar item-icon-right " [name]="page.icon"></ion-icon>\n              <h2 color="primary" class="list-grow-animation" ion-text>{{page.title | translate}}</h2>\n            </button>\n          </ion-item-group>\n      <!--     <ion-list-header class="fade-in-right dmo-dark">\n        <h2 style="color: white;">Facebook Stream</h2>\n      </ion-list-header>\n      <ion-item no-padding>\n    <iframe class="animated flipInYRight" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhoersteldeutschemitte%2F&tabs=timeline&width=300&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=131001554119757"\n      width="300" height="800" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n    </ion-item>\n            <ion-item-divider class="bounce-top dmo-dark">\n        <h2>{{\'FAVORITES\' | translate}} ({{favoritePosts.length}})</h2>\n      </ion-item-divider>\n      <ion-item *ngFor="let post of favoritePosts">\n        <ion-item (tap)="loadPost(post)">\n          {{post.title.rendered}}\n        </ion-item>\n      </ion-item>\n      <ion-item-divider class="fade-in-right dmo-dark">\n        <h2>{{\'DMVENUE\' | translate}}</h2>\n      </ion-item-divider>\n-->\n    </ion-list>\n  </ion-content>\n  <!--   <ion-footer>\n    <ion-list>\n      <ion-item-group>\n        <div class="fade-in-right">\n          <ion-item-divider class="dmo-dark menu-divider-bordered" ion-item>\n            <h2>{{\'SETTINGS\' | translate}}</h2>\n          </ion-item-divider>\n        </div>\n        <p style="display:flex; margin:0px">\n          <button style="width:50%" class="animated rotateInUpRight" ion-item icon-start *ngFor="let page of pagesrightfooter" (tap)="pushPage(page)">\n            <ion-icon small [name]="page.icon"></ion-icon>\n              <h4 style="font-size:smaller" color="primary">{{page.title | translate}}</h4>\n          </button>\n        </p>\n      </ion-item-group>\n    </ion-list>\n  </ion-footer> -->\n</ion-menu>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* Config */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], MyApp);

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
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressPost; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_wordpress_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WordpressPost = (function () {
    function WordpressPost(navParams, wordpressService, loadingController, iab, toastController, storage, socialSharing) {
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.loadingController = loadingController;
        this.iab = iab;
        this.toastController = toastController;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.comments = [];
        if (navParams.get("post")) {
            this.post = navParams.get("post");
            this.authorData = this.post["_embedded"].author[0];
            if (this.post["_embedded"].replies) {
                this.comments = this.post["_embedded"].replies[0];
            }
        }
        if (navParams.get("id")) {
            this.getPost(navParams.get("id"));
        }
    }
    WordpressPost.prototype.ngOnInit = function () {
        var _this = this;
        this.favoritePosts = [];
        this.storage.get("wordpress.favorite").then(function (data) {
            if (data) {
                _this.favoritePosts = JSON.parse(data);
            }
        });
    };
    WordpressPost.prototype.getPost = function (id) {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte Warten"
        });
        loader.present();
        this.wordpressService.getPost(id).subscribe(function (result) {
            _this.post = result;
            _this.authorData = _this.post["_embedded"].author[0];
            if (_this.post["_embedded"].replies) {
                _this.comments = _this.post["_embedded"].replies[0];
            }
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressPost.prototype.previewPost = function () {
        var browser = this.iab.create(this.post.link, "_blank");
        browser.show();
    };
    WordpressPost.prototype.sharePost = function () {
        var subject = this.post.title.rendered;
        var message = this.post.content.rendered;
        message = message.replace(/(<([^>]+)>)/gi, "");
        var url = this.post.link;
        this.socialSharing.share(message, subject, "", url);
    };
    WordpressPost.prototype.favoritePost = function (post) {
        var newPost = true;
        var message;
        this.favoritePosts.forEach(function (favPost) {
            if (JSON.stringify(favPost) === JSON.stringify(post)) {
                newPost = false;
            }
        });
        if (newPost) {
            this.favoritePosts.push(post);
            this.storage.set("wordpress.favorite", JSON.stringify(this.favoritePosts));
            message = "Beitrag wurde zu deinen Favoriten hinzugefügt";
        }
        else {
            message = "Beitrag wurde bereits zu deinen Favoriten hinzugefügt";
        }
        var toast = this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    return WordpressPost;
}());
WordpressPost = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-post\wordpress-post.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{ \'HEADLINE\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button color="primary" (tap)="favoritePost(post)">\n        <ion-icon name="thumbs-up"></ion-icon>\n        {{ \'FAVORITE\' | translate }}\n      </button>\n      <button (tap)="sharePost()" ion-button icon-only>\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="toolbar-header">\n    <div *ngIf="post && authorData">\n      <h1 class="title-h1" text-wrap [innerHTML]="post.title.rendered"></h1>\n      <h4 class="title-date">\n        <b>{{authorData.name}},</b> {{post.date | date: \'fullDate\'}}</h4>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="post">\n  <div class="slide-in-bck-bottom">\n    <wordpress-feature-media *ngIf="post.featured_media" [id]="post.featured_media"></wordpress-feature-media>\n    <ion-card text-wrap *ngIf="post.content.rendered">\n      <p padding text-justify [innerHtml]="post.content.rendered"></p>\n    </ion-card>\n    <button ion-button margin-top full (tap)=previewPost()>Artikel anzeigen</button>\n    <ion-list *ngIf="comments">\n      <ion-item-divider light>Kommentare</ion-item-divider>\n      <ion-item text-wrap *ngFor="let comment of comments">\n        <ion-avatar item-left>\n          <img [src]="comment.author_avatar_urls[96]">\n        </ion-avatar>\n        <h2>{{comment.author_name}}</h2>\n        <p [innerHTML]="comment.content.rendered"></p>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-post\wordpress-post.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], WordpressPost);

//# sourceMappingURL=wordpress-post.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? args : 100;
        var trail = "...";
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "truncate"
    })
], TruncatePipe);

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimHtmlPipe = (function () {
    function TrimHtmlPipe() {
    }
    TrimHtmlPipe.prototype.transform = function (value) {
        return this.htmlToPlainText(value);
    };
    TrimHtmlPipe.prototype.htmlToPlainText = function (html) {
        return String(html).replace(/<[^>]+>/gm, "");
    };
    return TrimHtmlPipe;
}());
TrimHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: "trimHTML"
    })
], TrimHtmlPipe);

//# sourceMappingURL=trim-html.pipe.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slides_component_slides_component__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SlidesModule = (function () {
    function SlidesModule() {
    }
    return SlidesModule;
}());
SlidesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__slides_component_slides_component__["a" /* SlidesComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__slides_component_slides_component__["a" /* SlidesComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__slides_component_slides_component__["a" /* SlidesComponent */]]
    })
], SlidesModule);

//# sourceMappingURL=slides.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component_home_component__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component_home_component__["a" /* HomeComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__home_component_home_component__["a" /* HomeComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__home_component_home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_wordpress_categories_wordpress_categories_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__youtube_youtube_channel_youtube_channel_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_wordpress_page_wordpress_page_component__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { WordpressPage } from '../../wordpress/wordpress-page/wordpress-page.component';
// import { AboutComponent } from '../../about/about-component/about.component';
// import { WordpressHome } from '../../wordpress/wordpress-home/wordpress-home.component';
// import { WordpressPosts } from '../../wordpress/wordpress-posts/wordpress-posts.component';
// import { WordpressCategories } from '../../wordpress/wordpress-categories/wordpress-categories.component';
// import { WordpressTags } from '../../wordpress/wordpress-tags/wordpress-tags.component';
// import { WordpressFavorites } from '../../wordpress/wordpress-favorites/wordpress-favorites.component';
// import { WordpressPages } from '../../wordpress/wordpress-pages/wordpress-pages.component';

// import { WordpressMenus } from '../../wordpress/wordpress-menus/wordpress-menus.component';
// import { GoogleMapsComponent } from '../../google-maps/google-maps-component/google-maps.component';
// import { SlidesComponent } from '../../slides/slides-component/slides.component';
// import { FeedCategoriesComponent } from '../../feeds/feed-categories/feed-categories.component';
// import { FeedCategoryComponent } from '../../feeds/feed-category/feed-category.component';
// import { YoutubeVideosComponent } from '../../youtube/youtube-videos/youtube-videos.component';
// import { YoutubeChannelComponent } from '../../youtube/youtube-channel/youtube-channel.component';
// import { BarcodeScannerComponent } from '../../barcode-scanner/barcode-scanner-component/barcode-scanner.component';
// import { ChartsComponent } from '../../charts/charts-component/charts.component';
// import { FirebaseHomeComponent } from '../../firebase/firebase-home/firebase-home.component';
var HomeComponent = (function () {
    function HomeComponent(navController, menuController, events) {
        this.navController = navController;
        this.menuController = menuController;
        this.events = events;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pages = [
            {
                title: "POSTS",
                component: __WEBPACK_IMPORTED_MODULE_2__wordpress_wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
                icon: "paper",
                note: "DM Webseite"
            },
            {
                title: "CATEGORIES",
                component: __WEBPACK_IMPORTED_MODULE_3__wordpress_wordpress_categories_wordpress_categories_component__["a" /* WordpressCategories */],
                icon: "bookmarks",
                note: "DM Webseite"
            },
            { title: 'PAGE', component: __WEBPACK_IMPORTED_MODULE_5__wordpress_wordpress_page_wordpress_page_component__["a" /* WordpressPage */], icon: 'document', note: 'Wordpress', params: { id: 369 } },
            //   { title: 'ABOUT', component: AboutComponent, icon: 'photos', note: '' },
            //   { title: 'LOGIN', component: WordpressHome, icon: 'log-in', note: 'Wordpress' },
            //   { title: 'POSTS', component: WordpressPosts, icon: 'logo-wordpress', note: 'Wordpress' },
            //   { title: 'CATEGORIES', component: WordpressCategories, icon: 'pricetags', note: 'Wordpress' },
            //   { title: 'TAGS', component: WordpressTags, icon: 'pricetags', note: 'Wordpress' },
            //   { title: 'CATEGORY', component: WordpressPosts, icon: 'pricetags', note: 'Wordpress', params: { category: { name: 'Category Name', id: 16 }}},
            //   { title: 'FAVORITES', component: WordpressFavorites, icon: 'heart', note: 'Wordpress (Storage)' },
            //   { title: 'PAGES', component: WordpressPages, icon: 'document', note: 'Wordpress' },
            //	 { title: 'PAGE', component: WordpressPage, icon: 'document', note: 'Wordpress', params: { id: 2 }},
            //   { title: 'MENUS', component: WordpressMenus, icon: 'menu', note: 'Wordpress' },
            //   { title: 'Firebase', component: FirebaseHomeComponent, icon: 'flame', note: 'Firebase' },
            //   { title: 'GOOGLE_MAPS', component: GoogleMapsComponent, icon: 'map', note: '' },
            //   { title: 'SLIDES', component: SlidesComponent, icon: 'images', note: 'Welcome Tour' },
            //   { title: 'FEEDS', component: FeedCategoriesComponent, icon: 'logo-rss', note: 'RSS (YQL)' },
            //   { title: 'FEED_CATEGORY', component: FeedCategoryComponent, icon: 'logo-rss', note: 'RSS (YQL)' },
            //   { title: 'YOUTUBE_VIDEOS', component: YoutubeVideosComponent, icon: 'logo-youtube', note: 'Youtube' },
            //   { title: 'YOUTUBE_CHANNEL', component: YoutubeChannelComponent, icon: 'logo-youtube', note: 'Youtube' },
            //   { title: 'CHARTS', component: ChartsComponent, icon: 'pie', note: 'Chart.js' },
            //	 { title: 'BARCODE_SCANNER', component: BarcodeScannerComponent, icon: 'barcode', note: '' }
            {
                title: "YOUTUBE_HOME",
                component: __WEBPACK_IMPORTED_MODULE_4__youtube_youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */],
                icon: "logo-youtube",
                note: "Youtube"
            }
        ];
        this.events.subscribe("navigationEvent", function (object) {
            _this.menuController.close();
            if (object.component) {
                _this.navController.push(object.component, object.params);
            }
        });
    };
    HomeComponent.prototype.openPage = function (page) {
        this.navController.push(page.component, page.params);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-home",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\home\home-component\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{\'HOME\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n      <ion-icon name=\'more\'></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n  <h2>{{\'HOME_TITLE\' | translate}}</h2>\n  <p>\n    {{\'HOME_MESSAGE\' | translate}}\n  </p>\n  <p>\n    Die zur Partei gewordene Bewegung DEUTSCHE MITTE schafft den einzig sicheren Weg in die Zukunft: den ethischen – zur Bewahrung\n    der Schöpfung. Wir bringen Menschen in ein wachsendes und gutes Miteinander.</p>\n  <ion-list>\n    <ion-item *ngFor="let page of pages" (tap)="openPage(page)">\n      <ion-icon [name]="page.icon" item-left></ion-icon>\n      {{page.title | translate}}\n      <ion-note item-right>\n        {{page.note}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\home\home-component\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_component_tabs_component__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__tabs_component_tabs_component__["a" /* TabsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__tabs_component_tabs_component__["a" /* TabsComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tabs_component_tabs_component__["a" /* TabsComponent */]]
    })
], TabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_home_wordpress_home_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_login_wordpress_login_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wordpress_post_wordpress_post_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wordpress_feature_media_wordpress_feature_media_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordpress_categories_wordpress_categories_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordpress_tags_wordpress_tags_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wordpress_favorites_wordpress_favorites_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wordpress_pages_wordpress_pages_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wordpress_page_wordpress_page_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__wordpress_menus_wordpress_menus_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wordpress_menu_wordpress_menu_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__wordpress_menu_item_wordpress_menu_item_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wordpress_posts_home_wordpress_posts_home_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__wordpress_page_downloads_wordpress_page_downloads_component__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var WordpressModule = (function () {
    function WordpressModule() {
    }
    return WordpressModule;
}());
WordpressModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__wordpress_home_wordpress_home_component__["a" /* WordpressHome */],
            __WEBPACK_IMPORTED_MODULE_4__wordpress_login_wordpress_login_component__["a" /* WordpressLogin */],
            __WEBPACK_IMPORTED_MODULE_5__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
            __WEBPACK_IMPORTED_MODULE_6__wordpress_post_wordpress_post_component__["a" /* WordpressPost */],
            __WEBPACK_IMPORTED_MODULE_7__wordpress_feature_media_wordpress_feature_media_component__["a" /* WordpressFeatureMedia */],
            __WEBPACK_IMPORTED_MODULE_8__wordpress_categories_wordpress_categories_component__["a" /* WordpressCategories */],
            __WEBPACK_IMPORTED_MODULE_9__wordpress_tags_wordpress_tags_component__["a" /* WordpressTags */],
            __WEBPACK_IMPORTED_MODULE_10__wordpress_favorites_wordpress_favorites_component__["a" /* WordpressFavorites */],
            __WEBPACK_IMPORTED_MODULE_11__wordpress_pages_wordpress_pages_component__["a" /* WordpressPages */],
            __WEBPACK_IMPORTED_MODULE_12__wordpress_page_wordpress_page_component__["a" /* WordpressPage */],
            __WEBPACK_IMPORTED_MODULE_13__wordpress_menus_wordpress_menus_component__["a" /* WordpressMenus */],
            __WEBPACK_IMPORTED_MODULE_14__wordpress_menu_wordpress_menu_component__["a" /* WordpressMenu */],
            __WEBPACK_IMPORTED_MODULE_15__wordpress_menu_item_wordpress_menu_item_component__["a" /* WordpressMenuItem */],
            __WEBPACK_IMPORTED_MODULE_17__wordpress_page_downloads_wordpress_page_downloads_component__["a" /* WordpressPageDownloads */],
            __WEBPACK_IMPORTED_MODULE_16__wordpress_posts_home_wordpress_posts_home_component__["a" /* WordpressPostsHome */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__wordpress_home_wordpress_home_component__["a" /* WordpressHome */],
            __WEBPACK_IMPORTED_MODULE_4__wordpress_login_wordpress_login_component__["a" /* WordpressLogin */],
            __WEBPACK_IMPORTED_MODULE_5__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
            __WEBPACK_IMPORTED_MODULE_6__wordpress_post_wordpress_post_component__["a" /* WordpressPost */],
            __WEBPACK_IMPORTED_MODULE_7__wordpress_feature_media_wordpress_feature_media_component__["a" /* WordpressFeatureMedia */],
            __WEBPACK_IMPORTED_MODULE_8__wordpress_categories_wordpress_categories_component__["a" /* WordpressCategories */],
            __WEBPACK_IMPORTED_MODULE_9__wordpress_tags_wordpress_tags_component__["a" /* WordpressTags */],
            __WEBPACK_IMPORTED_MODULE_10__wordpress_favorites_wordpress_favorites_component__["a" /* WordpressFavorites */],
            __WEBPACK_IMPORTED_MODULE_11__wordpress_pages_wordpress_pages_component__["a" /* WordpressPages */],
            __WEBPACK_IMPORTED_MODULE_12__wordpress_page_wordpress_page_component__["a" /* WordpressPage */],
            __WEBPACK_IMPORTED_MODULE_13__wordpress_menus_wordpress_menus_component__["a" /* WordpressMenus */],
            __WEBPACK_IMPORTED_MODULE_14__wordpress_menu_wordpress_menu_component__["a" /* WordpressMenu */],
            __WEBPACK_IMPORTED_MODULE_15__wordpress_menu_item_wordpress_menu_item_component__["a" /* WordpressMenuItem */],
            __WEBPACK_IMPORTED_MODULE_17__wordpress_page_downloads_wordpress_page_downloads_component__["a" /* WordpressPageDownloads */],
            __WEBPACK_IMPORTED_MODULE_16__wordpress_posts_home_wordpress_posts_home_component__["a" /* WordpressPostsHome */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__wordpress_home_wordpress_home_component__["a" /* WordpressHome */],
            __WEBPACK_IMPORTED_MODULE_4__wordpress_login_wordpress_login_component__["a" /* WordpressLogin */],
            __WEBPACK_IMPORTED_MODULE_5__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */],
            __WEBPACK_IMPORTED_MODULE_6__wordpress_post_wordpress_post_component__["a" /* WordpressPost */],
            __WEBPACK_IMPORTED_MODULE_7__wordpress_feature_media_wordpress_feature_media_component__["a" /* WordpressFeatureMedia */],
            __WEBPACK_IMPORTED_MODULE_8__wordpress_categories_wordpress_categories_component__["a" /* WordpressCategories */],
            __WEBPACK_IMPORTED_MODULE_9__wordpress_tags_wordpress_tags_component__["a" /* WordpressTags */],
            __WEBPACK_IMPORTED_MODULE_10__wordpress_favorites_wordpress_favorites_component__["a" /* WordpressFavorites */],
            __WEBPACK_IMPORTED_MODULE_11__wordpress_pages_wordpress_pages_component__["a" /* WordpressPages */],
            __WEBPACK_IMPORTED_MODULE_12__wordpress_page_wordpress_page_component__["a" /* WordpressPage */],
            __WEBPACK_IMPORTED_MODULE_13__wordpress_menus_wordpress_menus_component__["a" /* WordpressMenus */],
            __WEBPACK_IMPORTED_MODULE_14__wordpress_menu_wordpress_menu_component__["a" /* WordpressMenu */],
            __WEBPACK_IMPORTED_MODULE_15__wordpress_menu_item_wordpress_menu_item_component__["a" /* WordpressMenuItem */],
            __WEBPACK_IMPORTED_MODULE_17__wordpress_page_downloads_wordpress_page_downloads_component__["a" /* WordpressPageDownloads */],
            __WEBPACK_IMPORTED_MODULE_16__wordpress_posts_home_wordpress_posts_home_component__["a" /* WordpressPostsHome */]
        ]
    })
], WordpressModule);

//# sourceMappingURL=wordpress.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressFeatureMedia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_wordpress_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordpressFeatureMedia = (function () {
    function WordpressFeatureMedia(wordpressService) {
        this.wordpressService = wordpressService;
    }
    WordpressFeatureMedia.prototype.ngOnInit = function () {
        if (this.id > 0) {
            this.getMedia(this.id);
        }
    };
    WordpressFeatureMedia.prototype.getMedia = function (id) {
        var _this = this;
        this.wordpressService.getMedia(id).subscribe(function (result) {
            _this.media = result;
        });
    };
    return WordpressFeatureMedia;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], WordpressFeatureMedia.prototype, "id", void 0);
WordpressFeatureMedia = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "wordpress-feature-media",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-feature-media\wordpress-feature-media.html"*/'<img *ngIf="media && media.media_type == \'image\' " src="{{media.source_url}}" />'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-feature-media\wordpress-feature-media.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_wordpress_service__["a" /* WordpressService */]])
], WordpressFeatureMedia);

//# sourceMappingURL=wordpress-feature-media.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressTags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordpressTags = (function () {
    function WordpressTags(wordpressService, navController, loadingController) {
        this.wordpressService = wordpressService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    WordpressTags.prototype.ngOnInit = function () {
        this.getTags();
    };
    WordpressTags.prototype.getTags = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte warten"
        });
        loader.present();
        this.wordpressService.getTags().subscribe(function (result) {
            _this.tags = result;
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressTags.prototype.loadTag = function (tag) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */], {
            tag: tag
        });
    };
    return WordpressTags;
}());
WordpressTags = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-tags\wordpress-tags.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{\'TAGS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let tag of tags" (click)="loadTag(tag)">\n      <ion-icon name="attach" item-left></ion-icon>\n      <h2>{{tag.name}}</h2>\n      <ion-badge item-right primary>{{tag.count}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-tags\wordpress-tags.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], WordpressTags);

//# sourceMappingURL=wordpress-tags.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_component_settings_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__settings_component_settings_component__["a" /* SettingsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__settings_component_settings_component__["a" /* SettingsComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__settings_component_settings_component__["a" /* SettingsComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */]]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var YoutubeModule = (function () {
    function YoutubeModule() {
    }
    return YoutubeModule;
}());
YoutubeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__["a" /* YoutubeVideosComponent */],
            __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */],
            __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__["a" /* YoutubeVideosComponent */],
            __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */],
            __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__youtube_videos_youtube_videos_component__["a" /* YoutubeVideosComponent */],
            __WEBPACK_IMPORTED_MODULE_4__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__youtube_channel_youtube_channel_component__["a" /* YoutubeChannelComponent */],
            __WEBPACK_IMPORTED_MODULE_6__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */]
        ]
    })
], YoutubeModule);

//# sourceMappingURL=youtube.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeVideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_video_youtube_video_component__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeVideosComponent = (function () {
    function YoutubeVideosComponent(navParams, youtubeService, navController, loadingController) {
        this.navParams = navParams;
        this.youtubeService = youtubeService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    YoutubeVideosComponent.prototype.ngOnInit = function () {
        this.loader = this.loadingController.create({
            content: "Bitte Warten"
        });
        this.getPlaylistId();
    };
    YoutubeVideosComponent.prototype.getPlaylistId = function () {
        var _this = this;
        this.loader.present();
        this.youtubeService.getPlaylistId().subscribe(function (result) {
            if (result.items.length &&
                result.items[0].contentDetails.relatedPlaylists.uploads) {
                var playlistId = result.items[0].contentDetails.relatedPlaylists.uploads;
                _this.getVideos(playlistId);
            }
            else {
                _this.loader.dismiss();
            }
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    YoutubeVideosComponent.prototype.getVideos = function (playlistId) {
        var _this = this;
        this.youtubeService.getVideos(playlistId).subscribe(function (result) {
            _this.videos = result.items;
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    YoutubeVideosComponent.prototype.loadVideo = function (video) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__youtube_video_youtube_video_component__["a" /* YoutubeVideoComponent */], {
            video: video
        });
    };
    return YoutubeVideosComponent;
}());
YoutubeVideosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-videos\youtube-videos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle="left" icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'YOUTUBE_VIDEOS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor="let video of videos" (click)="loadVideo(video)">\n    <ion-item text-wrap>\n      <ion-thumbnail item-left *ngIf="video.snippet.thumbnails.default.url">\n        <img [src]="video.snippet.thumbnails.default.url">\n      </ion-thumbnail>\n      <h2>{{video.snippet.title}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-videos\youtube-videos.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], YoutubeVideosComponent);

//# sourceMappingURL=youtube-videos.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component_about_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aussenpolitik_component_aussenpolitik_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__innenpolitik_component_innenpolitik_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finanzen_component_finanzen_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wirtschaft_component_wirtschaft_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__arbeit_component_arbeit_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__verteidigung_component_verteidigung_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bildung_component_bildung_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__familie_component_familie_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__umwelt_component_umwelt_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nahrung_component_nahrung_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gesundheit_component_gesundheit_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__verkehr_component_verkehr_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__entwicklung_component_entwicklung_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__justiz_component_justiz_component__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__about_component_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__aussenpolitik_component_aussenpolitik_component__["a" /* AussenpolitikComponent */], __WEBPACK_IMPORTED_MODULE_5__innenpolitik_component_innenpolitik_component__["a" /* InnenpolitikComponent */], __WEBPACK_IMPORTED_MODULE_6__finanzen_component_finanzen_component__["a" /* FinanzenComponent */], __WEBPACK_IMPORTED_MODULE_7__wirtschaft_component_wirtschaft_component__["a" /* WirtschaftComponent */], __WEBPACK_IMPORTED_MODULE_8__arbeit_component_arbeit_component__["a" /* ArbeitComponent */], __WEBPACK_IMPORTED_MODULE_9__verteidigung_component_verteidigung_component__["a" /* VerteidigungComponent */], __WEBPACK_IMPORTED_MODULE_10__bildung_component_bildung_component__["a" /* BildungComponent */], __WEBPACK_IMPORTED_MODULE_11__familie_component_familie_component__["a" /* FamilieComponent */], __WEBPACK_IMPORTED_MODULE_12__umwelt_component_umwelt_component__["a" /* UmweltComponent */], __WEBPACK_IMPORTED_MODULE_13__nahrung_component_nahrung_component__["a" /* NahrungComponent */], __WEBPACK_IMPORTED_MODULE_14__gesundheit_component_gesundheit_component__["a" /* GesundheitComponent */], __WEBPACK_IMPORTED_MODULE_15__verkehr_component_verkehr_component__["a" /* VerkehrComponent */], __WEBPACK_IMPORTED_MODULE_16__entwicklung_component_entwicklung_component__["a" /* EntwicklungComponent */], __WEBPACK_IMPORTED_MODULE_17__justiz_component_justiz_component__["a" /* JustizComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__about_component_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__aussenpolitik_component_aussenpolitik_component__["a" /* AussenpolitikComponent */], __WEBPACK_IMPORTED_MODULE_5__innenpolitik_component_innenpolitik_component__["a" /* InnenpolitikComponent */], __WEBPACK_IMPORTED_MODULE_6__finanzen_component_finanzen_component__["a" /* FinanzenComponent */], __WEBPACK_IMPORTED_MODULE_7__wirtschaft_component_wirtschaft_component__["a" /* WirtschaftComponent */], __WEBPACK_IMPORTED_MODULE_8__arbeit_component_arbeit_component__["a" /* ArbeitComponent */], __WEBPACK_IMPORTED_MODULE_9__verteidigung_component_verteidigung_component__["a" /* VerteidigungComponent */], __WEBPACK_IMPORTED_MODULE_10__bildung_component_bildung_component__["a" /* BildungComponent */], __WEBPACK_IMPORTED_MODULE_11__familie_component_familie_component__["a" /* FamilieComponent */], __WEBPACK_IMPORTED_MODULE_12__umwelt_component_umwelt_component__["a" /* UmweltComponent */], __WEBPACK_IMPORTED_MODULE_13__nahrung_component_nahrung_component__["a" /* NahrungComponent */], __WEBPACK_IMPORTED_MODULE_14__gesundheit_component_gesundheit_component__["a" /* GesundheitComponent */], __WEBPACK_IMPORTED_MODULE_15__verkehr_component_verkehr_component__["a" /* VerkehrComponent */], __WEBPACK_IMPORTED_MODULE_16__entwicklung_component_entwicklung_component__["a" /* EntwicklungComponent */], __WEBPACK_IMPORTED_MODULE_17__justiz_component_justiz_component__["a" /* JustizComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__about_component_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__aussenpolitik_component_aussenpolitik_component__["a" /* AussenpolitikComponent */], __WEBPACK_IMPORTED_MODULE_5__innenpolitik_component_innenpolitik_component__["a" /* InnenpolitikComponent */], __WEBPACK_IMPORTED_MODULE_6__finanzen_component_finanzen_component__["a" /* FinanzenComponent */], __WEBPACK_IMPORTED_MODULE_7__wirtschaft_component_wirtschaft_component__["a" /* WirtschaftComponent */], __WEBPACK_IMPORTED_MODULE_8__arbeit_component_arbeit_component__["a" /* ArbeitComponent */], __WEBPACK_IMPORTED_MODULE_9__verteidigung_component_verteidigung_component__["a" /* VerteidigungComponent */], __WEBPACK_IMPORTED_MODULE_10__bildung_component_bildung_component__["a" /* BildungComponent */], __WEBPACK_IMPORTED_MODULE_11__familie_component_familie_component__["a" /* FamilieComponent */], __WEBPACK_IMPORTED_MODULE_12__umwelt_component_umwelt_component__["a" /* UmweltComponent */], __WEBPACK_IMPORTED_MODULE_13__nahrung_component_nahrung_component__["a" /* NahrungComponent */], __WEBPACK_IMPORTED_MODULE_14__gesundheit_component_gesundheit_component__["a" /* GesundheitComponent */], __WEBPACK_IMPORTED_MODULE_15__verkehr_component_verkehr_component__["a" /* VerkehrComponent */], __WEBPACK_IMPORTED_MODULE_16__entwicklung_component_entwicklung_component__["a" /* EntwicklungComponent */], __WEBPACK_IMPORTED_MODULE_17__justiz_component_justiz_component__["a" /* JustizComponent */]]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturePoliticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__futurepolitics_component_futurepolitics_component__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FuturePoliticsModule = (function () {
    function FuturePoliticsModule() {
    }
    return FuturePoliticsModule;
}());
FuturePoliticsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__futurepolitics_component_futurepolitics_component__["a" /* FuturePoliticsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__futurepolitics_component_futurepolitics_component__["a" /* FuturePoliticsComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__futurepolitics_component_futurepolitics_component__["a" /* FuturePoliticsComponent */]]
    })
], FuturePoliticsModule);

//# sourceMappingURL=futurepolitics.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__downloads_component_downloads_component__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DownloadsModule = (function () {
    function DownloadsModule() {
    }
    return DownloadsModule;
}());
DownloadsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__downloads_component_downloads_component__["a" /* DownloadsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__downloads_component_downloads_component__["a" /* DownloadsComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__downloads_component_downloads_component__["a" /* DownloadsComponent */]]
    })
], DownloadsModule);

//# sourceMappingURL=downloads.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsletter_component_newsletter_component__ = __webpack_require__(547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsletterModule = (function () {
    function NewsletterModule() {
    }
    return NewsletterModule;
}());
NewsletterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__newsletter_component_newsletter_component__["a" /* NewsletterComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__newsletter_component_newsletter_component__["a" /* NewsletterComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__newsletter_component_newsletter_component__["a" /* NewsletterComponent */]]
    })
], NewsletterModule);

//# sourceMappingURL=newsletter.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsletterComponent = (function () {
    function NewsletterComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return NewsletterComponent;
}());
NewsletterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "page-newsletter",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\newsletter\newsletter-component\newsletter.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Newsletter</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n                <ion-icon name=\'more\'></ion-icon>\n              </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<script type="application/json" class="joomla-script-options new">\n  {"system.paths":{"root":"","base":""}}\n\n</script>\n<script src="https://newsletter.deutsche-mitte.de/media/jui/js/jquery.min.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script src="https://newsletter.deutsche-mitte.de/media/jui/js/jquery-noconflict.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script src="https://newsletter.deutsche-mitte.de/media/jui/js/jquery-migrate.min.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script src="https://newsletter.deutsche-mitte.de/media/system/js/caption.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script src="https://newsletter.deutsche-mitte.de/media/jui/js/bootstrap.min.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script src="https://newsletter.deutsche-mitte.de/templates/protostar/js/template.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<!--[if lt IE 9]><script src="https://newsletter.deutsche-mitte.de/media/jui/js/html5.js?ffd7d6fca7753e755dc0216b868c0aa4"></script><![endif]-->\n<script src="https://newsletter.deutsche-mitte.de/media/com_acymailing/js/acymailing_module.js?v=570" async></script>\n<script src="https://newsletter.deutsche-mitte.de/media/system/js/mootools-core.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script src="https://newsletter.deutsche-mitte.de/media/system/js/core.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script src="https://newsletter.deutsche-mitte.de/media/system/js/mootools-more.js?ffd7d6fca7753e755dc0216b868c0aa4"></script>\n<script>\n  jQuery(window).on(\'load\', function () {\n    new JCaption(\'img.caption\');\n  });\n  jQuery(function ($) { $(".hasTooltip").tooltip({ "html": true, "container": "body" }); });\n  if (typeof acymailing == \'undefined\') {\n    var acymailing = Array();\n  }\n  acymailing[\'NAMECAPTION\'] = \'Name\';\n  acymailing[\'NAME_MISSING\'] = \'Bitte Namen eingeben\';\n  acymailing[\'EMAILCAPTION\'] = \'E-Mail\';\n  acymailing[\'VALID_EMAIL\'] = \'Bitte eine gültige E-Mail Adresse eingeben\';\n  acymailing[\'ACCEPT_TERMS\'] = \'Bitte die Nutzungsbedingungen lesen\';\n  acymailing[\'CAPTCHA_MISSING\'] = \'Bitte geben Sie den Sicherheitscode wie im Bild angezeigt ein\';\n  acymailing[\'NO_LIST_SELECTED\'] = \'Wählen Sie bitte die Listen aus, die Sie abonnieren möchten\';\n\n\n  acymailing[\'level\'] = \'enterprise\';\n\n  acymailing[\'reqFieldsformAcymailing64811\'] = Array(\'name\', \'html\');\n  acymailing[\'validFieldsformAcymailing64811\'] = Array(\'Bitte einen gültigen Wert für das Feld Name hinzufügen\', \'Bitte einen gültigen Wert für das Feld Erhalten hinzufügen\');\n  jQuery(function ($) {\n    $(\'.hasTip\').each(function () {\n      var title = $(this).attr(\'title\');\n      if (title) {\n        var parts = title.split(\'::\', 2);\n        var mtelement = document.id(this);\n        mtelement.store(\'tip:title\', parts[0]);\n        mtelement.store(\'tip:text\', parts[1]);\n      }\n    });\n    var JTooltips = new Tips($(\'.hasTip\').get(), { "maxTitleChars": 50, "fixed": false });\n  });\n  acymailing[\'excludeValuesformAcymailing64811\'] = Array();\n  acymailing[\'excludeValuesformAcymailing64811\'][\'name\'] = \'Name\';\n  acymailing[\'excludeValuesformAcymailing64811\'][\'email\'] = \'E-Mail\';\n\n</script>\n\n<ion-content padding>\n  <div class="acymailing_module" id="acymailing_module_formAcymailing64811">\n    <div class="acymailing_fulldiv" id="acymailing_fulldiv_formAcymailing64811">\n      <form id="formAcymailing64811" action="/index.php" onsubmit="return submitacymailingform(\'optin\',\'formAcymailing64811\', 0)"\n        method="post" name="formAcymailing64811">\n        <div class="acymailing_module_form">\n          <table class="acymailing_form">\n            <tr>\n              <td class="acyfield_name acy_requiredField">\n                <input id="user_name_formAcymailing64811" style="width:80%" onfocus="if(this.value == \'Name\') this.value = \'\';" onblur="if(this.value==\'\') this.value=\'Name\';"\n                  type="text" class="inputbox required" name="user[name]" value="Name" title="Name" /> </td>\n            </tr>\n            <tr>\n              <td class="acyfield_email acy_requiredField">\n                <input id="user_email_formAcymailing64811" style="width:80%" onfocus="if(this.value == \'E-Mail\') this.value = \'\';" onblur="if(this.value==\'\') this.value=\'E-Mail\';"\n                  type="text" class="inputbox required" name="user[email]" value="E-Mail" title="E-Mail" />                </td>\n            </tr>\n            <tr>\n\n              <td class="acysubbuttons">\n                <input class="button subbutton btn btn-primary" type="submit" value="Abonnieren" name="Submit" onclick="try{ return submitacymailingform(\'optin\',\'formAcymailing64811\', 0); }catch(err){alert(\'The form could not be submitted \'+err);return false;}"\n                />\n              </td>\n            </tr>\n          </table>\n          <input type="hidden" name="ajax" value="0" />\n          <input type="hidden" name="acy_source" value="module_87" />\n          <input type="hidden" name="ctrl" value="sub" />\n          <input type="hidden" name="task" value="notask" />\n          <input type="hidden" name="redirect" value="https%3A%2F%2Fnewsletter.deutsche-mitte.de%2F" />\n          <input type="hidden" name="redirectunsub" value="https%3A%2F%2Fnewsletter.deutsche-mitte.de%2F" />\n          <input type="hidden" name="option" value="com_acymailing" />\n          <input type="hidden" name="hiddenlists" value="6" />\n          <input type="hidden" name="acyformname" value="formAcymailing64811" />\n        </div>\n      </form>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\newsletter\newsletter-component\newsletter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], NewsletterComponent);

//# sourceMappingURL=newsletter.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StammtischeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stammtische_component_stammtische_component__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StammtischeModule = (function () {
    function StammtischeModule() {
    }
    return StammtischeModule;
}());
StammtischeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__stammtische_component_stammtische_component__["a" /* StammtischeComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__stammtische_component_stammtische_component__["a" /* StammtischeComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__stammtische_component_stammtische_component__["a" /* StammtischeComponent */]]
    })
], StammtischeModule);

//# sourceMappingURL=stammtische.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flash_card_flash_card__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_component_quiz__ = __webpack_require__(551);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuizModule = (function () {
    function QuizModule() {
    }
    return QuizModule;
}());
QuizModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__flash_card_flash_card__["a" /* FlashCardComponent */], __WEBPACK_IMPORTED_MODULE_4__quiz_component_quiz__["a" /* QuizComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__flash_card_flash_card__["a" /* FlashCardComponent */], __WEBPACK_IMPORTED_MODULE_4__quiz_component_quiz__["a" /* QuizComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__flash_card_flash_card__["a" /* FlashCardComponent */], __WEBPACK_IMPORTED_MODULE_4__quiz_component_quiz__["a" /* QuizComponent */]]
    })
], QuizModule);

//# sourceMappingURL=quiz.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NavController } from 'ionic-angular';
var FlashCardComponent = (function () {
    function FlashCardComponent() {
    }
    return FlashCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("isFlipped"),
    __metadata("design:type", Boolean)
], FlashCardComponent.prototype, "flipCard", void 0);
FlashCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "flash-card",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\quiz\flash-card\flash-card.html"*/'<div class="flip-container" [class.flipped]="flipCard">\n  <div class="flipper">\n    <div class="front">\n      <ng-content select=".flash-card-front"></ng-content>\n    </div>\n    <div class="back">\n      <ng-content select=".flash-card-back"></ng-content>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\quiz\flash-card\flash-card.html"*/
    }),
    __metadata("design:paramtypes", [])
], FlashCardComponent);

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizComponent = (function () {
    function QuizComponent(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.hasAnswered = false;
        this.score = 0;
    }
    QuizComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.slides.lockSwipes(true);
        this.dataService.load().then(function (data) {
            data.map(function (question) {
                var originalOrder = question.answers;
                question.answers = _this.randomizeAnswers(originalOrder);
                return question;
            });
            _this.questions = data;
        });
    };
    QuizComponent.prototype.nextSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    QuizComponent.prototype.selectAnswer = function (answer, question) {
        var _this = this;
        this.hasAnswered = true;
        answer.selected = true;
        question.flashCardFlipped = true;
        if (answer.correct) {
            this.score++;
        }
        setTimeout(function () {
            _this.hasAnswered = false;
            _this.nextSlide();
            answer.selected = false;
            question.flashCardFlipped = false;
        }, 2500);
    };
    QuizComponent.prototype.randomizeAnswers = function (rawAnswers) {
        for (var i = rawAnswers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = rawAnswers[i];
            rawAnswers[i] = rawAnswers[j];
            rawAnswers[j] = temp;
        }
        return rawAnswers;
    };
    QuizComponent.prototype.restartQuiz = function () {
        this.score = 0;
        this.slides.lockSwipes(false);
        this.slides.slideTo(1, 1000);
        this.slides.lockSwipes(true);
    };
    return QuizComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("slides"),
    __metadata("design:type", Object)
], QuizComponent.prototype, "slides", void 0);
QuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "quiz",template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\quiz\quiz-component\quiz.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n		<ion-icon name=\'menu\'></ion-icon>\n	</button>\n    <ion-title>WahlOMat</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n		<ion-icon name=\'more\'></ion-icon>\n	</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides #slides>\n    <ion-slide class="start-slide">\n      <h2>Passt die Deutsche Mitte zu mir?</h2>\n      <h4>10 Fragen</h4>\n      <button ion-button color="primary" (tap)="nextSlide()">Start!</button>\n    </ion-slide>\n    <ion-slide *ngFor="let question of questions; let i = index;">\n      <ion-header class="headerquiz">\n        <h3>Frage {{i+1}}/10</h3>\n      </ion-header>\n      <flash-card [isFlipped]="question.flashCardFlipped">\n        <div class="flash-card-front" [innerHTML]="question.flashCardFront"></div>\n        <div class="flash-card-back" [innerHTML]="question.flashCardBack"></div>\n      </flash-card>\n      <h3>{{question.questionText}}</h3>\n      <ion-list no-lines radio-group>\n        <ion-item *ngFor="let answer of question.answers; let i = index;">\n          <ion-label>{{i+1}}. {{answer.answer}}</ion-label>\n          <ion-radio (tap)="selectAnswer(answer, question)" [checked]="answer.selected" [disabled]="hasAnswered"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <ion-header class="dm-dark">\n        <ion-title>Übereinstimmung: {{score}}/10</ion-title>\n      </ion-header>\n      <img src="assets/img/quiz/WahlOMat-Ergebniss.png" />\n      <ion-footer>\n        <button (tap)="restartQuiz()" ion-button full large no-margin no-padding color="primary">Erneut Starten</button>\n      </ion-footer>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\quiz\quiz-component\quiz.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
], QuizComponent);

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookConnectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_connect_component_facebook_connect_component__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FacebookConnectModule = (function () {
    function FacebookConnectModule() {
    }
    return FacebookConnectModule;
}());
FacebookConnectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__facebook_connect_component_facebook_connect_component__["a" /* FacebookConnectComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__facebook_connect_component_facebook_connect_component__["a" /* FacebookConnectComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__facebook_connect_component_facebook_connect_component__["a" /* FacebookConnectComponent */]]
    })
], FacebookConnectModule);

//# sourceMappingURL=facebook-connect.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FeedsModule = (function () {
    function FeedsModule() {
    }
    return FeedsModule;
}());
FeedsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__["a" /* FeedCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__["a" /* FeedCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__["a" /* FeedsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__["a" /* FeedComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__["a" /* FeedCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__["a" /* FeedCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__["a" /* FeedsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__["a" /* FeedComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__feed_categories_feed_categories_component__["a" /* FeedCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__feed_category_feed_category_component__["a" /* FeedCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__feeds_feeds_component__["a" /* FeedsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__feed_feed_component__["a" /* FeedComponent */]
        ]
    })
], FeedsModule);

//# sourceMappingURL=feeds.module.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_home_firebase_home_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_login_firebase_login_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_sign_up_firebase_sign_up_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_reset_password_firebase_reset_password_component__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var config = {
    apiKey: "AAAAlltUqS8:APA91bFMWKvjP12e-pJZ0uLGQqAINktBvUk1RyzooyQAg6dsMRRwFZMEzK-wBDyEp0-uSo-xQMv_J0OPmyl14gCQ_TPwdSjAHgL2cMBeWKVbqhVXWNmV0-n4c2T-9-jyyps_kG757KjM",
    authDomain: "ionicframeworkapp-bc20a.firebaseapp.com",
    databaseURL: "https://ionicframeworkapp-bc20a.firebaseio.com",
    projectId: "ionicframeworkapp-bc20a",
    storageBucket: "ionicframeworkapp-bc20a.appspot.com",
    messagingSenderId: "645777369391"
};
var FirebaseModule = (function () {
    function FirebaseModule() {
    }
    return FirebaseModule;
}());
FirebaseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__firebase_home_firebase_home_component__["a" /* FirebaseHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__firebase_login_firebase_login_component__["a" /* FirebaseLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__firebase_sign_up_firebase_sign_up_component__["a" /* FirebaseSignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_9__firebase_reset_password_firebase_reset_password_component__["a" /* FirebaseResetPasswordComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__firebase_home_firebase_home_component__["a" /* FirebaseHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__firebase_login_firebase_login_component__["a" /* FirebaseLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__firebase_sign_up_firebase_sign_up_component__["a" /* FirebaseSignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_9__firebase_reset_password_firebase_reset_password_component__["a" /* FirebaseResetPasswordComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__firebase_home_firebase_home_component__["a" /* FirebaseHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__firebase_login_firebase_login_component__["a" /* FirebaseLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__firebase_sign_up_firebase_sign_up_component__["a" /* FirebaseSignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_9__firebase_reset_password_firebase_reset_password_component__["a" /* FirebaseResetPasswordComponent */]
        ]
    })
], FirebaseModule);

//# sourceMappingURL=firebase.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
        this.wordpressApiUrl = "https://deutsche-mitte.de/wp-json";
        //  public wordpressApiUrl = "https://deutsche-mitte.de/wp-json";
        this.wordpressMenusNavigation = false;
        this.feedsUrl = "./assets/data/feeds.json";
        this.feedsCategoryUrl = "./assets/data/feeds-category.json";
        this.youtubeKey = "AIzaSyBECpDIgY18MBmc4Uoxpo4L6nX45HFAtIA";
        this.youtubeApiUrl = "https://www.googleapis.com/youtube/v3/";
        this.youtubeUsername = "Deutsche Mitte";
        this.youtubeChannelId = "UCLC_9zmyYs5wFX46KBJz95w";
        this.youtubeResults = 50;
        this.emailTo = "Kingpin0509@live.de";
    }
    return Config;
}());
Config = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Config);

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressPage = (function () {
    function WordpressPage(navParams, wordpressService, loadingController, iab, socialSharing) {
        this.navParams = navParams;
        this.wordpressService = wordpressService;
        this.loadingController = loadingController;
        this.iab = iab;
        this.socialSharing = socialSharing;
        if (navParams.get("page")) {
            this.page = navParams.get("page");
        }
        if (navParams.get("id")) {
            this.getPage(navParams.get("id"));
        }
    }
    WordpressPage.prototype.getPage = function (id) {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Please wait"
        });
        loader.present();
        this.wordpressService.getPage(id).subscribe(function (result) {
            _this.page = result;
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressPage.prototype.previewPage = function () {
        var browser = this.iab.create(this.page.link, "_blank");
        browser.show();
    };
    WordpressPage.prototype.sharePage = function () {
        var subject = this.page.title.rendered;
        var message = this.page.content.rendered;
        message = message.replace(/(<([^>]+)>)/gi, "");
        var url = this.page.link;
        this.socialSharing.share(message, subject, "", url);
    };
    return WordpressPage;
}());
WordpressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-page\wordpress-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title *ngIf="page">{{page.title.rendered}}</ion-title>\n    <ion-buttons end>\n      <button (tap)="sharePage()" ion-button icon-only>\n	        <ion-icon name="share"></ion-icon>\n	      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <section *ngIf="page" padding [innerHTML]="page.content.rendered"></section>\n  <button ion-button full (click)=previewPage()>{{\'OPEN\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-page\wordpress-page.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], WordpressPage);

//# sourceMappingURL=wordpress-page.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeChannelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_channel_video_youtube_channel_video_component__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YoutubeChannelComponent = (function () {
    function YoutubeChannelComponent(navParams, youtubeService, navController, loadingController) {
        this.navParams = navParams;
        this.youtubeService = youtubeService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    YoutubeChannelComponent.prototype.ngOnInit = function () {
        this.loader = this.loadingController.create({
            content: "Bitte Warten!"
        });
        this.getChannel();
    };
    YoutubeChannelComponent.prototype.getChannel = function () {
        var _this = this;
        this.youtubeService.getChannel().subscribe(function (result) {
            _this.videos = result.items;
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    YoutubeChannelComponent.prototype.loadVideo = function (video) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__youtube_channel_video_youtube_channel_video_component__["a" /* YoutubeChannelVideoComponent */], {
            video: video
        });
    };
    return YoutubeChannelComponent;
}());
YoutubeChannelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-channel\youtube-channel.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title class="bounce-top">{{\'DM_YOUTUBE_CHANNEL\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n        <ion-icon name=\'more\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<!-- <ion-content>\n  <ion-card class="bordered slide-in-elliptic-bottom-bck">\n    <ion-list *ngFor="let video of videos" (click)="loadVideo(video)">\n      <ion-card-content>\n        <ion-item text-wrap>\n          <ion-thumbnail item-left *ngIf="video.snippet.thumbnails.default.url">\n            <img [src]="video.snippet.thumbnails.default.url">\n          </ion-thumbnail>\n          <h2 class="header">{{video.snippet.title}}</h2>\n        </ion-item>\n      </ion-card-content>\n    </ion-list>\n  </ion-card>\n</ion-content> -->\n<ion-content>\n  <ion-list class="slide-in-bck-bottom">\n    <ion-item *ngFor="let video of videos" (click)="loadVideo(video)">\n      <ion-avatar item-start *ngIf="video.snippet.thumbnails.default.url">\n        <img [src]="video.snippet.thumbnails.default.url">\n      </ion-avatar>\n      <h2 class="header">{{video.snippet.title}}</h2>\n      <p [innerHtml]="video.snippet.description"></p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\youtube\youtube-channel\youtube-channel.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_service__["a" /* YoutubeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], YoutubeChannelComponent);

//# sourceMappingURL=youtube-channel.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressCategories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_posts_wordpress_posts_component__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordpressCategories = (function () {
    function WordpressCategories(wordpressService, navController, loadingController) {
        this.wordpressService = wordpressService;
        this.navController = navController;
        this.loadingController = loadingController;
    }
    WordpressCategories.prototype.ngOnInit = function () {
        this.getCategories();
    };
    WordpressCategories.prototype.getCategories = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Bitte warten",
            spinner: "bubbles",
            cssClass: "wordpresspostshome",
            duration: 5000
        });
        loader.present();
        this.wordpressService.getCategories().subscribe(function (result) {
            _this.categories = result;
        }, function (error) { return console.log(error); }, function () { return loader.dismiss(); });
    };
    WordpressCategories.prototype.loadCategory = function (category) {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__wordpress_posts_wordpress_posts_component__["a" /* WordpressPosts */], {
            category: category
        });
    };
    return WordpressCategories;
}());
WordpressCategories = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-categories\wordpress-categories.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle="left" icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>{{\'CATEGORIES\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button menuToggle="right" icon-only>\n                <ion-icon name=\'more\'></ion-icon>\n              </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let category of categories" (click)="loadCategory(category)">\n      <ion-icon name="bookmarks" item-left></ion-icon>\n      <h2>{{category.name}}</h2>\n      <ion-badge item-right primary>{{category.count}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Kingp\Downloads\D\Deutsche-Mitte-Aktuell\src\pages\wordpress\wordpress-categories\wordpress-categories.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_wordpress_service__["a" /* WordpressService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], WordpressCategories);

//# sourceMappingURL=wordpress-categories.component.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map