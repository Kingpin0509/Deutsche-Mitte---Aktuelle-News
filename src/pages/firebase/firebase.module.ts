import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseHomeComponent } from './firebase-home/firebase-home.component';
import { FirebaseLoginComponent } from './firebase-login/firebase-login.component';
import { FirebaseSignUpComponent } from './firebase-sign-up/firebase-sign-up.component';
import { FirebaseResetPasswordComponent } from './firebase-reset-password/firebase-reset-password.component';

var config = {
  apiKey: "AIzaSyAWCp9T5itKF--J1F09hOdKX0bZPNVz6Gw",
  authDomain: "ionicframeworkapp-bc20a.firebaseapp.com",
  databaseURL: "https://ionicframeworkapp-bc20a.firebaseio.com/",
  projectId: "ionicframeworkapp-bc20a",
  storageBucket: "gs://ionicframeworkapp-bc20a.appspot.com/",
  messagingSenderId: "645777369391"
};

@NgModule({
  declarations: [
    FirebaseHomeComponent,
    FirebaseLoginComponent,
    FirebaseSignUpComponent,
    FirebaseResetPasswordComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  exports: [
    FirebaseHomeComponent,
    FirebaseLoginComponent,
    FirebaseSignUpComponent,
    FirebaseResetPasswordComponent
  ],
  entryComponents:[
    FirebaseHomeComponent,
    FirebaseLoginComponent,
    FirebaseSignUpComponent,
    FirebaseResetPasswordComponent
  ]
})
export class FirebaseModule {}
