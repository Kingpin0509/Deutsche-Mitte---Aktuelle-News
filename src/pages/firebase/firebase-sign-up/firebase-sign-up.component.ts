import { Component } from "@angular/core";
import {
  NavController,
  ToastController,
  LoadingController
} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  templateUrl: "./firebase-sign-up.html"
})
export class FirebaseSignUpComponent {
  account: { email: string; password: string } = {
    email: "",
    password: ""
  };

  constructor(
    public navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private angularFireAuth: AngularFireAuth
  ) {}

  signUp() {
    let loader = this.loadingController.create({
      content: "Bitte warten..."
    });
    loader.present();

    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(this.account.email, this.account.password)
      .then(value => {
        loader.dismiss();
        this.login();
      })
      .catch(error => {
        loader.dismiss();
        let errorMessage = error;
        if (errorMessage && errorMessage.message) {
          let message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
          let toast = this.toastController.create({
            message: message,
            duration: 6000,
            position: "bottom"
          });
          toast.present();
        }
      });
  }

  login() {
    let loader = this.loadingController.create({
      content: "Bitte Warten"
    });
    loader.present();

    this.angularFireAuth.auth
      .signInWithEmailAndPassword(this.account.email, this.account.password)
      .then(value => {
        loader.dismiss();
        this.navController.pop();
      })
      .catch(error => {
        loader.dismiss();
        let errorMessage = error;
        if (errorMessage && errorMessage.message) {
          let message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, "");
          let toast = this.toastController.create({
            message: message,
            duration: 6000,
            position: "bottom"
          });
          toast.present();
        }
      });
  }
}
