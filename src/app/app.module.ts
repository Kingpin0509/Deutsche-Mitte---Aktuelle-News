import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AnimationService } from 'css-animator';
import { SharedModule } from './shared/shared.module'
import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { SlidesModule } from '../pages/slides/slides.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { FeedsModule } from '../pages/feeds/feeds.module';
import { YoutubeModule } from '../pages/youtube/youtube.module';
import { AboutModule } from '../pages/about/about.module';
// Module Example: Use the PlaceholderModule for any new App Module
import { PlaceholderModule } from '../pages/placeholder/placeholder.module';
import { StammtischeModule } from '../pages/stammtische/stammtische.module';
//import { BarcodeScannerModule } from '../pages/barcode-scanner/barcode-scanner.module';
//import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
//import { GridModule } from '../pages/grid/grid.module';
//import { ContactModule } from '../pages/contact/contact.module';
//import { DatetimeModule } from '../pages/datetime/datetime.module';
//import { RangesModule } from '../pages/ranges/ranges.module';
//import { ActionSheetModule } from '../pages/action-sheet/action-sheet.module';
//import { FacebookConnectModule } from '../pages/facebook-connect/facebook-connect.module';
//import { LoginModule } from '../pages/login/login.module';
//import { ChartsModule } from '../pages/charts/charts.module';
import { FirebaseModule } from '../pages/firebase/firebase.module';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SharedModule,
    HomeModule,
    TabsModule,
    WordpressModule,
    SlidesModule,
    SettingsModule,
    FeedsModule,
    YoutubeModule,
    AboutModule,
    PlaceholderModule,
    StammtischeModule,
    //BarcodeScannerModule,
    //GoogleMapsModule,
    //GridModule,
    //ContactModule,
    //DatetimeModule,
    //RangesModule,
    //ActionSheetModule,
    //FacebookConnectModule,
    //LoginModule,
    //ChartsModule,
    FirebaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, AnimationService]
})
export class AppModule { }
