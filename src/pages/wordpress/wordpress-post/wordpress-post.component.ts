import { Component } from "@angular/core";
import { NavParams, LoadingController, ToastController } from "ionic-angular";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Storage } from "@ionic/storage";

import { WordpressService } from "../shared/services/wordpress.service";

@Component({
  templateUrl: "./wordpress-post.html",
  providers: [WordpressService]
})
export class WordpressPost {
  post: any;
  authorData: any;
  comments = [];
  favoritePosts: any;

  constructor(
    private navParams: NavParams,
    private wordpressService: WordpressService,
    private loadingController: LoadingController,
    private iab: InAppBrowser,
    private toastController: ToastController,
    private storage: Storage,
    private socialSharing: SocialSharing
  ) {
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
  ngOnInit() {
    this.favoritePosts = [];
    this.storage.get("wordpress.favorite").then(data => {
      if (data) {
        this.favoritePosts = JSON.parse(data);
      }
    });
  }
  getPost(id) {
    let loader = this.loadingController.create({
      content: "Bitte Warten"
    });
    loader.present();
    this.wordpressService.getPost(id).subscribe(
      result => {
        this.post = result;
        this.authorData = this.post["_embedded"].author[0];
        if (this.post["_embedded"].replies) {
          this.comments = this.post["_embedded"].replies[0];
        }
      },
      error => console.log(error),
      () => loader.dismiss()
    );
  }

  previewPost() {
    const browser = this.iab.create(this.post.link, "_blank");
    browser.show();
  }

  sharePost() {
    let subject = this.post.title.rendered;
    let message = this.post.content.rendered;
    message = message.replace(/(<([^>]+)>)/gi, "");
    let url = this.post.link;
    this.socialSharing.share(message, subject, "", url);
  }

  favoritePost(post) {
    let newPost: Boolean = true;
    let message: string;

    this.favoritePosts.forEach(favPost => {
      if (JSON.stringify(favPost) === JSON.stringify(post)) {
        newPost = false;
      }
    });

    if (newPost) {
      this.favoritePosts.push(post);
      this.storage.set(
        "wordpress.favorite",
        JSON.stringify(this.favoritePosts)
      );
      message = "Beitrag wurde zu deinen Favoriten hinzugefügt";
    } else {
      message = "Beitrag wurde bereits zu deinen Favoriten hinzugefügt";
    }
    let toast = this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
