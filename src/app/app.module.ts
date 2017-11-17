import { NgModule, ErrorHandler } from "@angular/core";
import {
  IonicApp,
  IonicErrorHandler,
  IonicModule
} from "ionic-angular";
import { AnimationService } from "css-animator";
import { MyApp } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { Data } from "../providers/data";
// Module Example: App Module
import { SlidesModule } from "../pages/slides/slides.module";
import { HomeModule } from "../pages/home/home.module";
import { TabsModule } from "../pages/tabs/tabs.module";
import { WordpressModule } from "../pages/wordpress/wordpress.module";
import { SettingsModule } from "../pages/settings/settings.module";
import { YoutubeModule } from "../pages/youtube/youtube.module";
import { AboutModule } from "../pages/about/about.module";
import { FuturePoliticsModule } from "../pages/futurepolitics/futurepolitics.module";
import { DownloadsModule } from "../pages/downloads/downloads.module";
import { NewsletterModule } from "../pages/newsletter/newsletter.module";
import { StammtischeModule } from "../pages/stammtische/stammtische.module";
import { QuizModule } from "../pages/quiz/quiz.module";
import { FacebookConnectModule } from "../pages/facebook-connect/facebook-connect.module";
import { FeedsModule } from "../pages/feeds/feeds.module";
import { FirebaseModule } from "../pages/firebase/firebase.module";
import { FeedService } from "../pages/feeds/shared/services/feed.service";
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

@NgModule({
  declarations: [MyApp],
  imports: [
    IonicModule.forRoot(MyApp, {}),
    SharedModule,
    SlidesModule,
    HomeModule,
    TabsModule,
    WordpressModule,
    SettingsModule,
    YoutubeModule,
    AboutModule,
    FuturePoliticsModule,
    DownloadsModule,
    NewsletterModule,
    StammtischeModule,
    QuizModule,
    FacebookConnectModule,
    FeedsModule,
    FirebaseModule
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
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Data,
    FeedService,
    AnimationService
  ]
})
export class AppModule {}
